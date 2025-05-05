// Bcryptjs
import bcrypt from "bcryptjs";

export default async function verify_password(incoming_password, save_password) {
  return await bcrypt.compare(incoming_password, save_password);
}
