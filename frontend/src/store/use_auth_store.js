// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/config/axios";

export const use_auth_store = create((set) => ({
  auth_user: false,
  is_auth_checking: false,

  login: async function (body) {
    try {
      const { data } = await axios_instance.post("/auth/login", JSON.stringify(body));
      set({ auth_user: true });
      return data;
    } catch (error) {
      set({ auth_user: false });
      throw error;
    }
  },

  signup: async function (body) {
    try {
      const { data } = await axios_instance.post("/user/register", JSON.stringify(body));
      return data;
    } catch (error) {
      throw error;
    }
  },

  profile: async function () {
    try {
      set({ is_auth_checking: true });
      const { data } = await axios_instance.get("/auth/profile");
      console.log(data);
    } catch (error) {
      set({ is_auth_checking: false });
      throw new Error(error.message);
    }
  },
}));
