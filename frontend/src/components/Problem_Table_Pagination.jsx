// Shadcn ui
import { Button } from "./ui/button";

export default function Problem_Table_Pagination({ current_page, total_pages, set_current_page }) {
  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      <Button
        variant="outline"
        disabled={current_page < 2}
        onClick={() => set_current_page((prev) => prev - 1)}>
        Prev
      </Button>
      {current_page} / {total_pages}
      <Button
        variant="outline"
        disabled={current_page >= total_pages}
        onClick={() => set_current_page((prev) => prev + 1)}>
        Next
      </Button>
    </div>
  );
}
