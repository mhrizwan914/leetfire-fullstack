// Shadcn ui
import { use_problem_store } from "@/store/use_problem_store";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
// Icons
import { Trash2 } from "lucide-react";

export default function Problem_Delete_Btn({ id }) {
  const { problem_delete_by_id, is_problem_deleting } = use_problem_store();
  const { toast } = useToast();
  return (
    <Button
      disabled={is_problem_deleting}
      variant="secondary"
      onClick={() => problem_delete_by_id(id, toast)}>
      <Trash2 className="w-5 h-5 text-red-600" />
    </Button>
  );
}
