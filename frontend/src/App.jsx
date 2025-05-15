// React router
import { Routes, Route, Navigate } from "react-router";
// Pages
import { Home_Page, Login_Page, Signup_Page, Dashboard_Page } from "@/pages/index";
// All avaailable routes
import Available_Routes from "./config/available_routes";
// Shadcn ui
import { Toaster } from "@/components/ui/toaster";
// Store
import { use_auth_store } from "./store/use_auth_store";

export default function App() {
  const { auth_user } = use_auth_store();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path={Available_Routes.Home_Page} element={<Home_Page />} />
        <Route
          path={Available_Routes.Login_Page}
          element={!auth_user ? <Login_Page /> : <Navigate to={Available_Routes.Dashboard_Page} />}
        />
        <Route
          path={Available_Routes.Signup_Page}
          element={!auth_user ? <Signup_Page /> : <Navigate to={Available_Routes.Dashboard_Page} />}
        />
        <Route
          path={Available_Routes.Dashboard_Page}
          element={auth_user ? <Dashboard_Page /> : <Navigate to={Available_Routes.Login_Page} />}
        />
      </Routes>
    </>
  );
}
