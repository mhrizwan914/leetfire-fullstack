// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";
// Utils
import handle_axios_error from "@/utils/handle_axios_error";
// Store
import { use_auth_store } from "./use_auth_store";

export const use_submissions_store = create((set) => ({
  is_loading: false,
  submissions: null,
  submission: null,
  submission_counts: 0,

  all_submissions: async function (body, toast) {
    set({ is_loading: true });

    try {
      const { data } = await axios_instance.post("/submission/all", JSON.stringify(body));

      set({ submissions: data?.data?.submissions });

      toast({ description: data?.message });
    } catch (error) {
      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();

        await logout(toast);
      }

      set({ submissions: null });

      return handle_axios_error(error, toast);
    } finally {
      set({ is_loading: false });
    }
  },

  submission_by_id: async function (id, toast) {
    set({ is_loading: true });

    try {
      const { data } = await axios_instance.get(`/submission/${id}`);

      set({ submission: data?.data?.submissions });

      toast({ description: data?.message });
    } catch (error) {
      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();

        await logout(toast);
      }

      set({ submission: null });

      return handle_axios_error(error, toast);
    } finally {
      set({ is_loading: false });
    }
  },

  submission_count: async function (id, toast) {
    set({ is_loading: true });

    try {
      const { data } = await axios_instance.get(`/submission/count/${id}`);

      set({ submission_counts: data?.data?.total });

      toast({ description: data?.message });
    } catch (error) {
      if (error?.response?.status === 401) {
        const { logout } = use_auth_store.getState();

        await logout(toast);
      }

      set({ submission_counts: 0 });

      return handle_axios_error(error, toast);
    } finally {
      set({ is_loading: false });
    }
  },
}));
