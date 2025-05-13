// Express router
import { Router } from "express";
// Controllers
import {
  problem_create,
  problem_get_all,
  problem_by_id,
  problem_update,
  problem_delete,
  problem_solved,
} from "../controllers/problem.controller.js";
// Middleware
import auth_middleware from "../middlewares/auth.middleware.js";
import admin_middleware from "../middlewares/admin.middleware.js";

const routes = Router();

// Create
routes.route("/create").post(auth_middleware, admin_middleware, problem_create);

// All
routes.route("/all").get(problem_get_all);

// Solved
routes.route("/solved").get(auth_middleware, problem_solved);

// Single
routes.route("/:id").get(auth_middleware, problem_by_id);

// Update
routes.route("/update/:id").post(auth_middleware, admin_middleware, problem_update);

// Delete
routes.route("/delete/:id").delete(auth_middleware, admin_middleware, problem_delete);

export default routes;
