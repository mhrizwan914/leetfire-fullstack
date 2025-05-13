// Express router
import { Router } from "express";
// Controllers
import { health_check } from "../controllers/health_check.controller.js";

const routes = Router();

// Login
routes.route("/").get(health_check);

export default routes;
