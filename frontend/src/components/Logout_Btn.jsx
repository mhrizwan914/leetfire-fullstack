// Shadcn ui
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// Store
import { use_auth_store } from "@/store/use_auth_store";
// React router
import { useNavigate } from "react-router";

export default function Logout_Btn() {
  const { toast } = useToast();
  const { logout } = use_auth_store();
  const navigate = useNavigate();

  const handle_logout = async () => {
    await logout(toast);
    navigate("/login");
  };

  return <Button onClick={() => handle_logout()}>Logout</Button>;
}
