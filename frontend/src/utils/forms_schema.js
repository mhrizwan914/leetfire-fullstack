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

export const create_problem_schema = z.object({
  title: z.string().trim().nonempty({ message: "Title is required" }),
  description: z.string().trim().nonempty({ message: "Description is required" }),
  difficulty: z
    .string()
    .trim()
    .nonempty({ message: "Difficulty is required" })
    .refine((val) => ["easy", "medium", "hard"].includes(val), {
      message: "Difficulty must be one of: easy, medium, or hard",
    }),
  tags: z
    .string()
    .trim()
    .nonempty({ message: "Tags are required" })
    .transform((val) => val.split(" ").filter(Boolean))
    .refine((tags) => tags.length > 0 && tags.length <= 5, {
      message: "Please enter between 1 and 5 tags (space-separated)",
    })
    .refine((tags) => tags.every((tag) => isNaN(Number(tag))), {
      message: "Tags must include text, not just numbers",
    }),
});
