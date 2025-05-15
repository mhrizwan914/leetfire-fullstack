// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/config/axios";

export const use_user_store = create((set) => ({
  is_signing: false,

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
