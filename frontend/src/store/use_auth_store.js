// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/config/axios";

export const use_auth_store = create((set) => ({
  auth_user: false,
  is_logging: false,
  is_signing: false,

  login: async function (body) {
    set({ is_logging: true });
    try {
      const { data } = await axios_instance.post("/auth/login", JSON.stringify(body));
      set({ is_logging: false, auth_user: data.data });
      return data;
    } catch (error) {
      set({ is_logging: false });
      if (error.code === "ECONNABORTED") {
        throw {
          status_code: 408,
          message: "Server is taking too long to respond. Please try again later.",
        };
      }
      throw error;
    }
  },

  signup: async function (body) {
    set({ is_signing: true });
    try {
      const { data } = await axios_instance.post("/user/register", JSON.stringify(body));
      set({ is_signing: false });
      return data;
    } catch (error) {
      set({ is_signing: false });
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
