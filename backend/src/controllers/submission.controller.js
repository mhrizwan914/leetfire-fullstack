// Utils
import { async_handler, api_response, api_error } from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";

// All
export const submission_get_all = async_handler(async (req, res) => {
  // Get user id
  const { id: user_id } = req.user;
  // Find all submissions
  const submissions = await db.submission.findMany({
    where: {
      submitted_by: user_id,
    },
  });
  // Check if there is no submissions
  if (submissions.length === 0) {
    throw new api_error(400, "No submission found");
  }
  // Send reponse
  return res
    .status(200)
    .json(new api_response(200, { submissions }, "Submission data found successfully"));
});

// Single
export const submission_by_id = async_handler(async (req, res) => {
  // Get user id
  const { id: user_id } = req.user;
  // Get problem id
  const { id: problem_id } = req.params;
  // Find all submissions
  const submissions = await db.submission.findMany({
    where: {
      submitted_by: user_id,
      problem_id,
    },
  });
  // Check if there is no submissions
  if (submissions.length === 0) {
    throw new api_error(400, "No submission found");
  }
  // Send reponse
  return res
    .status(200)
    .json(new api_response(200, { submissions }, "Submission data found successfully"));
});

// Total Submissions
export const submission_count = async_handler(async (req, res) => {
  // Get user id
  const { id: user_id } = req.user;
  // Get problem id
  const { id: problem_id } = req.params;
  // Find all submissions
  const submissions = await db.submission.count({
    where: {
      submitted_by: user_id,
      problem_id,
    },
  });
  // Check if there is no submissions
  if (submissions === 0) {
    throw new api_error(400, "No submission found");
  }
  // Send reponse
  return res
    .status(200)
    .json(new api_response(200, { total: submissions }, "Total submissions found successfully"));
});
