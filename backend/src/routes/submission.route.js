// Express router
import { Router } from "express";
// Controllers
import {
  submission_get_all,
  submission_by_id,
  submission_count,
} from "../controllers/submission.controller.js";
// Middleware
import auth_middleware from "../middlewares/auth.middleware.js";

const routes = Router();

// All
routes.route("/all").get(auth_middleware, submission_get_all);

// Single
routes.route("/:id").get(auth_middleware, submission_by_id);

// Total Submissions
routes.route("/count/:id").get(auth_middleware, submission_count);

export default routes;
