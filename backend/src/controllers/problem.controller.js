// Utils
import {
  async_handler,
  api_response,
  api_error,
  get_judge0_language_id,
  judge0_sleep,
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
  // Validate data
  // Loop thorugh each reference solutions for different languages
  for (const [language, solution] of Object.entries(reference_solutions)) {
    const language_id = get_judge0_language_id(language);
    if (!language_id) {
      throw new api_error(400, `Language ${language} is not supported`);
    }
    // Run test cases for all submissions
    const submissions = test_cases.map(({ input, output }) => ({
      source_code: solution,
      language_id: language_id,
      std_in: input,
      expected_output: output,
    }));
    // Submit submission in a single batch
    const submission_tokens = await fetch(
      `${process.env.JUDGE_0_URL}/submissions/batch?base64_encoded=true`,
      {
        method: "POST",
        body: submissions,
      }
    );
    console.log(submission_tokens);
    // Extract tokens
    const tokens = submission_tokens.map((res) => res.token);
    console.log(tokens);
    // Get submissions results
    while (true) {
      const data = await fetch(
        `${process.env.JUDGE_0_URL}/submissions/batch?${new URLSearchParams({
          tokens: tokens.join(","),
          base64_encoded: true,
        }).toString()}`,
        {
          method: "GET",
        }
      );
      console.log(data);
      const results = data.submissions;
      console.log(results);
      const is_all_submitted = results.every(
        (result) => result.status.id !== 1 && result.status.id !== 3
      );
      console.log(is_all_submitted);
      if (is_all_submitted) {
        return results;
      }
      await judge0_sleep(1000);
    }
  }
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
