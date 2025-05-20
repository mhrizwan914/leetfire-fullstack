// React router
import { Navigate } from "react-router";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";
// Store
import { use_auth_store } from "@/store/use_auth_store";
// React
import { useEffect } from "react";

export default function Auth_Guard({ children }) {
  const { auth_user, auth_check } = use_auth_store();
  const { toast } = useToast();
  const handle_auth_check = async () => {
    try {
      await auth_check();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "You are facing this issues",
        description: (
          <pre>
            <code>
              {JSON.stringify(
                error?.response?.data || error,
                (key, value) => {
                  if (key === "stack") return undefined;
                  return value;
                },
                2,
              )}
            </code>
          </pre>
        ),
      });
    }
  };
  useEffect(() => {
    handle_auth_check();
  }, [auth_check]);

  if (!auth_user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
