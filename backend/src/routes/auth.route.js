// Express router
import { Router } from "express";
// Controllers
import { user_login, user_logout, user_profile } from "../controllers/auth.controller.js";
// Validators schema's
import { user_login_validator } from "../validators/index.js";
// Middleware
import validator_middleware from "../middlewares/validator.middleware.js";
import auth_middleware from "../middlewares/auth.middleware.js";

const routes = Router();

// Login
routes.route("/login").get(user_login_validator(), validator_middleware, user_login);

// Profile
routes.route("/profile").get(auth_middleware, user_profile);

// Logout
routes.route("/logout").get(auth_middleware, user_logout);

export default routes;
