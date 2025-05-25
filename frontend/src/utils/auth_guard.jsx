// React router
import { Navigate } from "react-router";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";
// Store
import { use_auth_store } from "@/store/use_auth_store";
// React
import { useEffect } from "react";

export default function Auth_Guard({ children }) {
  const { auth_user, auth_check, is_checking_auth } = use_auth_store();
  const { toast } = useToast();

  useEffect(() => {
    if (!auth_user) {
      console.log("I'm inside auth check useeffect");

      auth_check(toast);
    }
  }, []);

  if (is_checking_auth) {
    console.log("I'm inside is auth checking");
    return (
      <div className="absolute z-50 inset-0 flex items-center justify-center">
        We are verifying you
      </div>
    );
  }

  if (!auth_user && is_checking_auth === false) {
    console.log("I'm inside if auth user and checking complete");
    return <Navigate to="/login" replace />;
  }

  return children;
}
