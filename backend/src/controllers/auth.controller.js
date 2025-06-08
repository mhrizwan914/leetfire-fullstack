// Utils
import {
  async_handler,
  api_response,
  api_error,
  generate_jwt_token,
  verify_password,
} from "../utils/index.js";
// DB
import db from "../db/prisma_client.js";

// Login
export const user_login = async_handler(async (req, res) => {
  // Get data
  const { email, password } = req.body;
  /* 
    @ Validate data 
    @ We are using express validtor middleware
  */
  // Check existing user
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new api_error(401, "User is not registered");
  }
  // Check password
  const check_password = await verify_password(password, user?.password);
  if (!check_password) {
    throw new api_error(401, "Email or Password not correct");
  }
  // Generate Access and Refresh Tokens
  const access_token = generate_jwt_token(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY },
  );
  const refresh_token = generate_jwt_token(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY },
  );
  // Set access token to cookies
  const cookie_option_access = {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 30 * 60 * 1000, // 30min
  };
  const cookie_option_refresh = {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 24 * 60 * 60 * 1000, // 24h
  };
  res.cookie("access_token", access_token, cookie_option_access);
  res.cookie("refresh_token", refresh_token, cookie_option_refresh);
  // Store refresh token to db
  await db.user.update({
    where: {
      email,
    },
    data: {
      refresh_token,
    },
  });
  // Send response
  return res.status(200).json(
    new api_response(
      200,
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          is_verified: user.is_verified,
        },
      },
      "User login successfully",
    ),
  );
});

// Profile
export const user_profile = async_handler(async (req, res) => {
  // Get data
  const { user } = req;
  // Find data
  const is_user = await db.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (!is_user) {
    throw new api_error(401, "Unauthorized: User no longer exists.");
  }
  // Send data
  return res.status(200).json(
    new api_response(
      200,
      {
        user: {
          id: is_user.id,
          username: is_user.username,
          email: is_user.email,
          role: is_user.role,
          is_verified: is_user.is_verified,
          avatar: is_user.avatar_url,
        },
      },
      "User is authentic",
    ),
  );
});

// Logout
export const user_logout = async_handler(async (req, res) => {
  // Get data
  const { user } = req;
  // Find data
  const is_user = await db.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (!is_user) {
    throw new api_error(401, "Unauthorized: User no longer exists.");
  }
  // Remove refresh token
  await db.user.update({
    where: {
      email: user.email,
    },
    data: {
      refresh_token: null,
    },
  });
  // Clear cookies
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  return res.status(200).json(new api_response(204, {}, "User logout successfully"));
});
