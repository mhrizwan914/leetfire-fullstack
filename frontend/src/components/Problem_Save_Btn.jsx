// Shadcn ui
import { Button } from "./ui/button";
// Icons
import { Bookmark } from "lucide-react";

export default function Problem_Save_Btn({ id }) {
  return (
    <Button variant="secondary" disabled={!id}>
      <Bookmark className="w-5 h-5 text-blue-600" />
    </Button>
  );
}
