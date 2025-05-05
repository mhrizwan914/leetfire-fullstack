// Express router
import { Router } from "express";
// Controllers
import { user_register } from "../controllers/user.controller.js";
// Validators schema's
import { user_register_validator } from "../validators/index.js";
// Middleware
import validator_middleware from "../middlewares/validator.middleware.js";

const routes = Router();

// Register
routes.route("/register").post(user_register_validator(), validator_middleware, user_register);

export default routes;
