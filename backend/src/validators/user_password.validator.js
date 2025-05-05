// Express Validator
import { body } from "express-validator";

export default function user_password_validator() {
  return [
    body("password")
      .notEmpty()
      .withMessage("Password is rquired")
      .isLength({ min: 8 })
      .withMessage("Password should be at least 8 characters"),
  ];
}
