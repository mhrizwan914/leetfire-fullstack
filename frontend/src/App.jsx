// Shadcn ui
import { Toaster } from "@/components/ui/toaster";
// App routes
import App_Routes from "./routes";

export default function App() {
  return (
    <>
      <Toaster />
      <App_Routes />
    </>
  );
}
