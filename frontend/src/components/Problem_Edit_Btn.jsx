// Shadcn ui
import { Button } from "./ui/button";
// Icons
import { Trash2 } from "lucide-react";

export default function Problem_Edit_Btn({ id }) {
  return (
    <Button variant="secondary" disabled={!id}>
      <Trash2 className="w-5 h-5 text-red-600" />
    </Button>
  );
}
