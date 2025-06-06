// Express
import express from "express";
// Cookie Parser
import cookieParser from "cookie-parser";
// Dotenv
import dotenv from "dotenv";
// Cors
import cors from "cors";
// Middlewares
import rate_limit from "./middlewares/rate_limit.middleware.js";

// Config dotenv
dotenv.config({
  path: "./.env",
});

// Create app instance
const app = express();

// Cors configurations
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development" ? "http://localhost:5173" : "https://leetfire.com",
    methods: ["GET", "POST", "DELETE", "UPDATE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// Middlewares
app.use(
  express.json({
    limit: "16kb",
  }),
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);
app.use(cookieParser());

app.use(rate_limit);

// Export
export default app;
