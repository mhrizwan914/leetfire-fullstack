// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";

export const use_problem_store = create((set) => ({
  is_problem_creating: false,

  problem_create: async function (body) {
    try {
      const { data } = await axios_instance.post("/problem/create", JSON.stringify(body));
      return data;
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        throw {
          status_code: 408,
          message: "Server is taking too long to respond. Please try again later.",
        };
      }
      throw error;
    }
  },
}));
