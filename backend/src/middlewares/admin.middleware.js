// Utils
import { api_error } from "../utils/index.js";

export default function admin_middleware(req, res, next) {
  if (req.user.role !== "admin") {
    throw new api_error(401, "Only admin can allow to create problem");
  }
  next();
}
