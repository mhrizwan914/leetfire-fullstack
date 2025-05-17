// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";

export const use_problem_store = create((set) => ({
  is_problem_creating: false,

  problem_create: async function () {},
}));
