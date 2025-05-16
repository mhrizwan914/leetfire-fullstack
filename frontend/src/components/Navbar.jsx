// React router
import { Link } from "react-router";
// Components
import Logout_Btn from "./Logout_Btn";
// Config
import Available_Routes from "@/config/available_routes";

export default function Navbar() {
  return (
    <header>
      <div className="dark:bg-white/80 bg-black/80 dark:text-black/80 text-white/80 py-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link className="font-bold text-xl" to={Available_Routes.Home_Page}>
              Leet Lab
            </Link>
            <Logout_Btn />
          </div>
        </div>
      </div>
    </header>
  );
}
