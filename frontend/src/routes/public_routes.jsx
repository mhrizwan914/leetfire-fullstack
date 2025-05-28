// Pages
import { Home_Page, Login_Page, Signup_Page } from "@/pages";
// React router
import { Navigate } from "react-router-dom";

const public_routes = (auth_user) => {
  return [
    {
      path: "/",
      element: <Home_Page />,
    },
    {
      path: "/login",
      element: !auth_user ? <Login_Page /> : <Navigate to="/dashboard" />,
    },
    {
      path: "/signup",
      element: !auth_user ? <Signup_Page /> : <Navigate to="/dashboard" />,
    },
  ];
};

export default public_routes;
