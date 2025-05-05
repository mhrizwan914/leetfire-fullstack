// JWT
import jwt from "jsonwebtoken";

export default function generate_jwt_token(data, secret, options) {
  return jwt.sign(data, secret, options);
}
