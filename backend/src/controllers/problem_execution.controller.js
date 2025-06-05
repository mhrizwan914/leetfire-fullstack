// Utils
import {
  async_handler,
  api_response,
  api_error,
  get_judge0_language_id,
  send_submissions,
  test_cases_results,
} from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";

// Execution
export const problem_execution = async_handler(async (req, res) => {
  // Get data
  const { code, std_input, expected_output, language } = req.body;
  // Get user id
  const { id: user_id } = req.user;
  // Get problem id
  const { id: problem_id } = req.params;
  // Validate input and expected output
  if (
    !Array.isArray(std_input) ||
    !Array.isArray(expected_output) ||
    std_input.length !== expected_output.length ||
    std_input.length === 0 ||
    expected_output.length === 0
  ) {
    throw new api_error(400, "std_input and expected_output must be valid data.");
  }
  // Get language id
  const language_id = get_judge0_language_id(language);
  if (!language_id) {
    throw new api_error(400, `Language ${language} is not supported`);
  }
  // Create submission
  const submissions = std_input.map((input) => ({
    source_code: code,
    language_id: language_id,
    stdin: input,
  }));
  // Submit submission in batch
  const submissions_tokens = await send_submissions(submissions);
  // Extract tokens
  const tokens = submissions_tokens.map((res) => res.token);
  // Get submissions results
  let final_results = await test_cases_results(tokens);
  // Check in which test case has an issues
  let is_all_passed = true;
  const analized_result = final_results.map((result, i) => {
    const stdout = result.stdout?.trim();
    const expected = expected_output[i]?.trim();

    if (stdout !== expected) is_all_passed = false;

    return {
      test_case: i + 1,
      status: is_all_passed ? "passed" : "failed",
      std_output: stdout,
      expected_output: expected,
      std_error: result?.stderr || null,
      compile_output: result?.compile_output || null,
      memory: result.memory ? `${result.memory} KB` : undefined,
      time: result.time ? `${result.time} s` : undefined,
    };
  });
  // Store submission in db
  const user_submission = await db.submission.create({
    data: {
      submitted_by: user_id,
      problem_id,
      source_code: code,
      language,
      std_input: std_input.join("\n"),
      std_output: JSON.stringify(analized_result.map(({ std_output }) => std_output)),
      std_error: analized_result.some(({ std_error }) => std_error)
        ? JSON.stringify(analized_result.map(({ std_error }) => std_error))
        : null,
      compile_output: analized_result.some(({ compile_output }) => compile_output)
        ? JSON.stringify(analized_result.map(({ compile_output }) => compile_output))
        : null,
      status: is_all_passed ? "accepted" : "wrong",
      memory: analized_result.some(({ memory }) => memory)
        ? JSON.stringify(analized_result.map(({ memory }) => memory))
        : null,
      time: analized_result.some(({ time }) => time)
        ? JSON.stringify(analized_result.map(({ time }) => time))
        : null,
    },
  });
  // Mark problem solved if all test cases passed
  if (is_all_passed) {
    await db.solved.upsert({
      where: {
        solved_by_problem_id: {
          solved_by: user_id,
          problem_id,
        },
      },
      update: {},
      create: {
        solved_by: user_id,
        problem_id,
      },
    });
  }
  // Save all test cases
  const user_test_case = analized_result.map((result) => ({
    submission_id: user_submission.id,
    ...result,
  }));
  await db.test_Case.createMany({
    data: user_test_case,
  });
  // Send response to user
  const final_submission = await db.submission.findUnique({
    where: {
      id: user_submission.id,
    },
    include: {
      test_cases: true,
    },
  });
  return res.status(201).json(new api_response(201, { submission: final_submission }));
});
