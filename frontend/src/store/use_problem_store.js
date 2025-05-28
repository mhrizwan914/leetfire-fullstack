// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";
// Utils
import handle_axios_error from "@/utils/handle_axios_error";
// Store
import { use_auth_store } from "./use_auth_store";

export const use_problem_store = create((set) => ({
  is_problem_creating: false,
  is_getting_all_problems: false,
  all_problems: null,
  is_problem_creating: false,
  is_getting_problem: false,
  problem: null,

  problem_create: async function (body, toast) {
    set({ is_problem_creating: true });
    try {
      const { data } = await axios_instance.post("/problem/create", JSON.stringify(body));

      set({ all_problems: data?.data?.problems });

      toast({ description: data?.message });

      return data.status_code;
    } catch (error) {
      set({ all_problems: null });

      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();
        await logout(toast);
        return;
      }

      return handle_axios_error(error, toast);
    } finally {
      set({ is_problem_creating: false });
    }
  },

  problem_get_all: async function (toast) {
    set({ is_getting_all_problems: true });

    try {
      const { data } = await axios_instance.get("/problem/all");

      set({ all_problems: data?.data?.problems });
    } catch (error) {
      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();
        await logout(toast);
      }
      set({ all_problems: null });
    } finally {
      set({ is_getting_all_problems: false });
    }
  },

  problem_get_by_id: async function (id) {
    set({ is_getting_problem: true });

    try {
      const { data } = await axios_instance.get("/problem/all");

      set({ problem: data?.data?.problem });
    } catch (error) {
      set({ problem: null });
    } finally {
      set({ is_getting_problem: false });
    }
  },
}));
