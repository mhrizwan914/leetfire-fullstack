// Utils
import {
  async_handler,
  generate_temporary_token,
  api_response,
  send_mail,
  generate_email_verification_body,
  api_error,
} from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";
// Bcryptjs
import bcrypt from "bcryptjs";

// Register
export const user_register = async_handler(async (req, res) => {
  // Get data
  const { username, email, password } = req.body;
  /* 
    @ Validate data 
    @ We are using express validtor middleware
  */
  // Check existing user
  const is_user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (is_user) {
    throw new api_error(403, "User is already exsist");
  }
  // Hash password
  const hash_password = await bcrypt.hash(password, 10);
  // Create email verification token
  const token = generate_temporary_token();
  // Create user
  const user = await db.user.create({
    data: {
      username,
      email,
      password: hash_password,
      email_verification_token: token.hash_token,
      email_verification_token_expiry: token.token_expiry,
    },
  });
  // Send verification email
  try {
    await send_mail({
      email: user.email,
      subject: "Verification Email",
      body: generate_email_verification_body(
        user.username,
        `http://localhost:8000/api/v1/user/verify/${token.un_hash_token}`
      ),
    });
    return res
      .status(201)
      .json(
        new api_response(201, {}, "User registered successfully and verification email is sent")
      );
  } catch (error) {
    throw new api_error(202, "User registered, but failed to send verification email.", error);
  }
});
