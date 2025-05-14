// Zod
import { z } from "zod";

export const signup_schema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username should be at least 3 characters" })
    .max(10, { message: "Username should not exceed 10 characters" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email must be valid" })
    .refine(
      (email) => !["test", "example"].some((keyword) => email.toLowerCase().includes(keyword)),
      { message: "Email contains blocked or test keywords" },
    ),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password should be at least 8 characters" }),
});

export const login_schema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email must be valid" })
    .refine(
      (email) => !["test", "example"].some((keyword) => email.toLowerCase().includes(keyword)),
      { message: "Email contains blocked or test keywords" },
    ),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password should be at least 8 characters" }),
});
