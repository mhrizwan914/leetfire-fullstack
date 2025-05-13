// Express router
import { Router } from "express";
// Controllers
import {
  playlist_create,
  playlist_add_problem,
  playlist_remove_problem,
  playlist_all,
  playlist_by_id,
  playlist_update,
  playlist_delete,
} from "../controllers/playlist.controller.js";
// Middleware
import auth_middleware from "../middlewares/auth.middleware.js";

const routes = Router();

// Create
routes.route("/create").post(auth_middleware, playlist_create);

// Add List
routes.route("/add/:id").post(auth_middleware, playlist_add_problem);

// Remove List
routes.route("/remove/:id").post(auth_middleware, playlist_remove_problem);

// All
routes.route("/").get(auth_middleware, playlist_all);

// Single
routes.route("/:id").get(auth_middleware, playlist_by_id);

// Update
routes.route("/update/:id").post(auth_middleware, playlist_update);

// Delete
routes.route("/delete/:id").delete(auth_middleware, playlist_delete);

export default routes;
