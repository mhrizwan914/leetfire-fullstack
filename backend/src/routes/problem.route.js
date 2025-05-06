// Express router
import { Router } from "express";
// Controllers
import {
  problem_create,
  problem_all,
  problem_by_id,
  problem_update,
  problem_delete,
  problem_solved,
} from "../controllers/problem.controller.js";

const routes = Router();

// Create
routes.route("/create").post(problem_create);

// All
routes.route("/all").post(problem_all);

// By id
routes.route("/:id").post(problem_by_id);

// Update
routes.route("/update").post(problem_update);

// Delete
routes.route("/delete/:id").post(problem_delete);

// Solved
routes.route("/solved").post(problem_solved);

export default routes;
