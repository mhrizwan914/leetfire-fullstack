// Shadcn ui
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Problem_Table_Head() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Solved</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Difficulty</TableHead>
        <TableHead>Tags</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
  );
}
