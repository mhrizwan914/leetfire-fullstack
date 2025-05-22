// React router
import { Link } from "react-router";
// Components
import Logout_Btn from "./Logout_Btn";
// Shadcn ui
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
// Store
import { use_auth_store } from "@/store/use_auth_store";

export default function Navbar() {
  const { auth_user } = use_auth_store();
  return (
    <header>
      <div className="dark:bg-white/80 bg-black/80 dark:text-black/80 text-white/80 py-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link className="font-bold text-xl" to="/dashboard">
              LeetLab
            </Link>
            <div className="flex items-center gap-5">
              {auth_user?.role === "admin" ? (
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Profile</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Link to="/dashboard/create-problem">Create Problem</Link>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              ) : null}
              <Logout_Btn />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
