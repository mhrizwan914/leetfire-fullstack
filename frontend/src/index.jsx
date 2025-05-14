// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// React Router
import { BrowserRouter } from "react-router";
// Global css
import "./index.css";
// App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
