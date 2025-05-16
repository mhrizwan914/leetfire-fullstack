// React router
import { Navigate, Outlet } from "react-router";
// All avaailable routes
import Available_Routes from "../config/available_routes";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";
// Store
import { use_auth_store } from "../store/use_auth_store";
// React
import { useEffect } from "react";
// Components
import Navbar from "@/components/Navbar";

export default function Protected_Layout() {
  const { auth_user, auth_check, is_auth_checking } = use_auth_store();
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
    if (!auth_user) handle_auth_check();
  }, [auth_check]);

  if (is_auth_checking) {
    return <div>Checking authentication...</div>;
  }

  if (!auth_user) {
    return <Navigate to={Available_Routes.Login_Page} replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
