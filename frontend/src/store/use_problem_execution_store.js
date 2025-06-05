// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";
// Utils
import handle_axios_error from "@/utils/handle_axios_error";
// Store
import { use_auth_store } from "./use_auth_store";

export const use_problem_execution_store = create((set) => ({
  is_executing: false,
  submission: null,

  problem_execution: async function (id, body, toast) {
    set({ is_executing: true });

    try {
      const { data } = await axios_instance.post(`/problem-execution/${id}`, JSON.stringify(body));

      set({ submission: data?.data?.submission });

      toast({ description: data?.message });
    } catch (error) {
      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();

        await logout(toast);
      }

      set({ submission: null });

      return handle_axios_error(error, toast);
    } finally {
      set({ is_executing: false });
    }
  },
}));
