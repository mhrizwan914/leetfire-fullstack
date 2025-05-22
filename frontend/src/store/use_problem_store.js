// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";

export const use_problem_store = create((set) => ({
  is_problem_creating: false,
  is_getting_all_problems: false,
  all_problems: null,

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
  problem_get_all: async function () {
    set({ is_getting_all_problems: true });
    try {
      const { data } = await axios_instance.get("/problem/all");
      set({ all_problems: data.data.problems });
      return data;
    } catch (error) {
      set({ all_problems: null });
      if (error.code === "ECONNABORTED") {
        throw {
          status_code: 408,
          message: "Server is taking too long to respond. Please try again later.",
        };
      }
      throw error;
    } finally {
      set({ is_getting_all_problems: false });
    }
  },
}));
