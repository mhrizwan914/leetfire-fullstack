// Zustand
import { create } from "zustand";
// Config
import { axios_instance } from "@/utils/axios";
// Utils
import handle_axios_error from "@/utils/handle_axios_error";

export const use_user_store = create((set) => ({
  is_signing: false,

  signup: async function (body, toast) {
    set({ is_signing: true });

    try {
      const { data } = await axios_instance.post("/user/register", JSON.stringify(body));

      toast({ description: data?.message });

      return data.status_code;
    } catch (error) {
      return handle_axios_error(error, toast);
    } finally {
      set({ is_signing: false });
    }
  },
}));
