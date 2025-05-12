// Express router
import { Router } from "express";
// Controllers
import { problem_execution } from "../controllers/problem_execution.controller.js";
// Middleware
import auth_middleware from "../middlewares/auth.middleware.js";

const routes = Router();

// Execution
routes.route("/:id").post(auth_middleware, problem_execution);

export default routes;
