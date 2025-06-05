// Zustand
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// Config
import { axios_instance } from "@/utils/axios";
// Utils
import handle_axios_error from "@/utils/handle_axios_error";

export const use_auth_store = create(
  persist(
    (set, get) => ({
      auth_user: null,
      is_logging: false,
      is_checking_auth: null,

      login: async function (body, toast) {
        set({ is_logging: true });

        try {
          const { data } = await axios_instance.post("/auth/login", JSON.stringify(body));

          set({ auth_user: data?.data?.user });

          toast({ description: data?.message });

          return data.status_code;
        } catch (error) {
          set({ auth_user: null });

          return handle_axios_error(error, toast);
        } finally {
          set({ is_logging: false });
        }
      },

      auth_check: async function (toast) {
        set({ is_checking_auth: true });

        try {
          const { data } = await axios_instance.get("/auth/profile");

          set({ auth_user: data?.data?.user });
        } catch (error) {
          set({ auth_user: null });

          return handle_axios_error(error, toast);
        } finally {
          set({ is_checking_auth: false });
        }
      },

      logout: async function (toast) {
        try {
          const { data } = await axios_instance.get("/auth/logout");

          toast({ description: data?.message });
        } catch (error) {
          return handle_axios_error(error, toast);
        } finally {
          sessionStorage.removeItem("auth_user");

          set({ auth_user: null });
        }
      },
    }),
    {
      name: "auth_user",
      partialize: (state) => ({ auth_user: state.auth_user }),
    },
  ),
);
