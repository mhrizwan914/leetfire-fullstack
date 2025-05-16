// Shadcn ui
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// Store
import { use_auth_store } from "@/store/use_auth_store";
// Config
import Available_Routes from "@/config/available_routes";
// React router
import { useNavigate } from "react-router";

export default function Logout_Btn() {
  const { toast } = useToast();
  const { logout } = use_auth_store();
  const navigate = useNavigate();

  const handle_logout = async () => {
    try {
      const data = await logout();
      navigate(Available_Routes.Login_Page, { replace: true });
      toast({
        title: "User logout successfully",
        description: (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
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

  return <Button onClick={() => handle_logout()}>Logout</Button>;
}
