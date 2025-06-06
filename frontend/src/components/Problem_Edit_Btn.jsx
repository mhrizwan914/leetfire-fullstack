// Shadcn ui
import { Button } from "./ui/button";
// Icons
import { PenBox } from "lucide-react";

export default function Problem_Edit_Btn({ id }) {
  return (
    <Button variant="secondary" disabled={!id}>
      <PenBox className="w-5 h-5 text-green-600" />
    </Button>
  );
}
