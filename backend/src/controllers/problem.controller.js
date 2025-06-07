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
          `Test case ${i + 1} failed for Language ${language}. ${result.status.description}`,
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
    .json(new api_response(201, { problem }, "Problem is created successfully"));
});

// All
export const problem_get_all = async_handler(async (req, res) => {
  // Get all problems
  const all_problems = await db.problem.findMany({
    include: {
      solved: {
        where: {
          solved_by: req?.user?.id,
        },
      },
    },
  });
  // Check is there any problem or not
  if (!all_problems || all_problems.length === 0) {
    throw new api_error(400, "No problems found");
  }
  // Send response
  return res
    .status(200)
    .json(new api_response(200, { problems: all_problems }, "All problems found successfully"));
});

// Single
export const problem_by_id = async_handler(async (req, res) => {
  // Get data
  const { id } = req.params;
  // Find data
  const is_problem = await db.problem.findUnique({
    where: {
      id,
    },
    include: {
      submissions: {
        where: {
          problem_id: id,
        },
      },
    },
  });
  if (!is_problem) {
    throw new api_error(400, "No problem found");
  }
  // Send data
  return res
    .status(200)
    .json(new api_response(200, { problem: is_problem }, "Problem found successfully"));
});

// Update
export const problem_update = async_handler(async (req, res) => {
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
  // Get probelm id
  const { id: probelm_id } = req.params;
  // Get user id
  const { id: user_id } = req.user;
  /* 
    We will validate data in future
  */
  // Check is problem exists
  const is_problem = await db.problem.findUnique({
    where: {
      id: probelm_id,
    },
  });
  if (!is_problem) {
    throw new api_error(400, "No problem found");
  }
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
          `Test case ${i + 1} failed for Language ${language}. ${result.status.description}`,
        );
      }
    }
  }
  // Update problem by id in database
  const problem = await db.problem.update({
    where: {
      id: probelm_id,
      created_by: user_id,
    },
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
    },
  });
  // Send response
  return res
    .status(200)
    .json(new api_response(200, "Problem is updated successfully", { problem }));
});

// Delete
export const problem_delete = async_handler(async (req, res) => {
  // Get data
  const { id } = req.params;
  // Get user id
  const { id: user_id } = req.user;
  // Find data
  const is_problem = await db.problem.findUnique({
    where: {
      id,
    },
  });
  if (!is_problem) {
    throw new api_error(400, "No problem found");
  }
  // Delete probelm
  await db.problem.delete({
    where: {
      id,
      created_by: user_id,
    },
  });
  // Send data
  return res.sendStatus(200);
});

// Solved
export const problem_solved = async_handler(async (req, res) => {
  // Get user id
  const { id: user_id } = req.user;
  // Find problems
  const solved = await db.problem.findMany({
    where: {
      solved: {
        some: {
          solved_by: user_id,
        },
      },
    },
    include: {
      solved: {
        where: {
          solved_by: user_id,
        },
      },
    },
  });
  // Send reponse
  return res.status(200).json(new api_response(200, { solved }, "All solved problems found"));
});
