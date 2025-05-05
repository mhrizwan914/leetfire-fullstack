// Node
import crypto from "crypto";

export default function generate_temporary_token() {
  const un_hash_token = crypto.randomBytes(20).toString("hex");
  const hash_token = crypto.createHash("sha256").update(un_hash_token).digest("hex");
  const token_expiry = new Date(Date.now() + 20 * 60 * 1000);
  return {
    un_hash_token,
    hash_token,
    token_expiry,
  };
}
