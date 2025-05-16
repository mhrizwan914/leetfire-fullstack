// Store
import { use_auth_store } from "@/store/use_auth_store";
// React router
import { Navigate } from "react-router";

export default function Auth_Admin_Guard({ children }) {
  const { auth_user } = use_auth_store();
  if (auth_user.user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
