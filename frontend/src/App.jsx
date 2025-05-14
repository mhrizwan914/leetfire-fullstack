import { Button } from "./components/ui/button";
// React Router
import { Routes, Route, Navigate } from "react-router";
// Pages
import { Home_Page, Login_Page, Signup_Page } from "@/pages/index";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/login" element={<Login_Page />} />
        <Route path="/signup" element={<Signup_Page />} />
      </Routes>
    </>
  );
}
