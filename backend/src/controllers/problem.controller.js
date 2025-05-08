// Utils
import {
  async_handler,
  api_response,
  api_error,
  get_judge0_language_id,
  test_cases_results,
  send_submissions,
} from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";

// Create
export const problem_create = async_handler(async (req, res) => {
  // Get data
  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    hints,
    editorial,
    test_cases,
    code_snippets,
    reference_solutions,
  } = req.body;
  // Get user id
  const { id: user_id } = req.user;
  /* 
    We will validate data in future
  */
  // Loop thorugh each reference solutions for different languages
  for (const [language, solution_code] of Object.entries(reference_solutions)) {
    // Get language id
    const language_id = get_judge0_language_id(language);
    if (!language_id) {
      throw new api_error(400, `Language ${language} is not supported`);
    }
    // Run test cases for all submissions
    const submissions = test_cases.map(({ input, output }) => ({
      source_code: solution_code,
      language_id: language_id,
      stdin: input,
      expected_output: output,
    }));
    // Submit submission in batch
    const submissions_tokens = await send_submissions(submissions);
    // Extract tokens
    const tokens = submissions_tokens.map((res) => res.token);
    // Get submissions results
    let final_results = await test_cases_results(tokens);
    // Check in which test case has an issues
    for (let i = 0; i < final_results.length; i++) {
      const result = final_results[i];
      if (result.status.id !== 3) {
        throw new api_error(
          400,
          `Test case ${i + 1} failed for Language ${language}. ${result.status.description}`
        );
      }
    }
  }
  // Save problem in database
  const problem = await db.problem.create({
    data: {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      hints,
      editorial,
      test_cases,
      code_snippets,
      reference_solutions,
      created_by: user_id,
    },
  });
  // Send response
  return res
    .status(201)
    .json(new api_response(201, "Problem is created successfully", { problem }));
});

// All
export const problem_all = async_handler(async (req, res) => {});

// By id
export const problem_by_id = async_handler(async (req, res) => {});

// Update
export const problem_update = async_handler(async (req, res) => {});

// Delete
export const problem_delete = async_handler(async (req, res) => {});

// Solved
export const problem_solved = async_handler(async (req, res) => {});
