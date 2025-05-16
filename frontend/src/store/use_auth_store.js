// Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Config
import { axios_instance } from "@/config/axios";

export const use_auth_store = create(
  persist(
    (set) => ({
      auth_user: false,
      is_logging: false,
      is_auth_checking: false,

      login: async function (body) {
        set({ is_logging: true });
        try {
          const { data } = await axios_instance.post("/auth/login", JSON.stringify(body));
          set({ auth_user: data.data });
          return data;
        } catch (error) {
          if (error.code === "ECONNABORTED") {
            throw {
              status_code: 408,
              message: "Server is taking too long to respond. Please try again later.",
            };
          }
          throw error;
        } finally {
          set({ is_logging: false });
        }
      },

      auth_check: async function () {
        set({ is_auth_checking: true });
        try {
          const { data } = await axios_instance.get("/auth/profile");
          set({ auth_user: data.data });
        } catch (error) {
          set({ auth_user: false });
          throw error;
        } finally {
          set({ is_auth_checking: false });
        }
      },

      logout: async function () {
        try {
          const { data } = await axios_instance.get("/auth/logout");
          set({ auth_user: false });
          return data;
        } catch (error) {
          if (error.code === "ECONNABORTED") {
            throw {
              status_code: 408,
              message: "Server is taking too long to respond. Please try again later.",
            };
          }
          throw error;
        } finally {
          localStorage.removeItem("auth_storage");
          set({ auth_user: false });
        }
      },
    }),
    {
      name: "auth_storage",
      partialize: (state) => ({ auth_user: state.auth_user }),
    },
  ),
);
