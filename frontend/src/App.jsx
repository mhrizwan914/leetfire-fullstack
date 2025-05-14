// React router
import { Routes, Route, Navigate } from "react-router";
// Pages
import { Home_Page, Login_Page, Signup_Page, Dashboard_Page } from "@/pages/index";
// All avaailable routes
import Available_Routes from "./config/available_routes";

export default function App() {
  let authorized = false;
  return (
    <>
      <Routes>
        <Route path={Available_Routes.Home_Page} element={<Home_Page />} />
        <Route path={Available_Routes.Login_Page} element={<Login_Page />} />
        <Route path={Available_Routes.Signup_Page} element={<Signup_Page />} />
        <Route
          path={Available_Routes.Dashboard_Page}
          element={authorized ? <Dashboard_Page /> : <Navigate to={Available_Routes.Login_Page} />}
        />
      </Routes>
    </>
  );
}
