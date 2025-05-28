// Shadcn ui
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "./ui/form";
// React
import { Link } from "react-router";
// Utils
import capitalize_string from "@/utils/capitalize_string";
// Icons
import { CheckCircle, PenBox, Trash2 } from "lucide-react";
// React
import { useEffect, useMemo, useState } from "react";

export default function Problems_Table({ all_problems, auth_user }) {
  const [search, set_search] = useState("");
  const [difficulty, set_difficulty] = useState("");
  const [selected_tags, set_selected_tags] = useState("");
  const [current_page, set_current_page] = useState(1);
  const difficulties = ["easy", "medium", "hard"];

  const all_tags = useMemo(() => {
    if (!Array.isArray(all_problems)) return [];

    const finded_tags = new Set();

    all_problems?.forEach(({ tags }) => {
      tags?.forEach((tag) => finded_tags.add(tag));
    });

    return Array.from(finded_tags);
  }, [all_problems]);

  const filtered_problems = useMemo(() => {
    return (all_problems || null)
      .filter((problem) => problem?.title?.toLowerCase()?.includes(search?.toLowerCase()))
      .filter((problem) => (difficulty === "" ? true : problem?.difficulty === difficulty))
      .filter((problem) => (selected_tags === "" ? true : problem?.tags?.includes(selected_tags)));
  }, [search, difficulty, selected_tags]);

  const items_per_page = 5;
  const total_pages = Math.ceil(filtered_problems?.length / items_per_page);

  const paginated_problems = useMemo(() => {
    console.log(filtered_problems?.length);

    return filtered_problems?.slice(
      (current_page - 1) * items_per_page,
      current_page * items_per_page,
    );
  }, [filtered_problems, current_page]);

  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-10">All listed Problems</h2>
      <div className="dark:bg-white/80 px-4 py-3 rounded-md bg-black/80 my-5 grid grid-cols-3 gap-10">
        <Input
          type="text"
          placeholder="Search problem by title"
          value={search}
          onChange={(e) => set_search(e.target.value)}
        />
        <Select value={difficulty} onValueChange={(e) => set_difficulty(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by difficulty level" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((e, i) => (
              <SelectItem key={i} value={e}>
                {capitalize_string(e)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selected_tags} onValueChange={(e) => set_selected_tags(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by tags" />
          </SelectTrigger>
          <SelectContent>
            {all_tags.map((e, i) => (
              <SelectItem key={i} value={e}>
                {capitalize_string(e)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Solved</TableHead>
            {auth_user?.role === "admin" && <TableHead>Action</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated_problems?.map(({ id, title, difficulty, tags, solved }) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link to={`/dashboard/problem/${id}`}>{title}</Link>
                </TableCell>
                <TableCell>{capitalize_string(difficulty)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {tags.map((e) => (
                      <Badge key={e} variant="secondary" className="cursor-pointer">
                        {capitalize_string(e)}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="!pr-2">
                  <Checkbox
                    id="terms2"
                    checked={solved?.some((user) => user?.solved_by === auth_user?.id)}
                    readOnly
                  />
                </TableCell>
                {auth_user?.role === "admin" && (
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" asChild>
                        <Link to={id}>
                          <PenBox className="w-5 h-5 text-green-600" />
                        </Link>
                      </Button>
                      <Button variant="secondary" asChild>
                        <Link to={id}>
                          <Trash2 className="w-5 h-5 text-red-600" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
          disabled={current_page > total_pages - 1}
          onClick={() => set_current_page((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
