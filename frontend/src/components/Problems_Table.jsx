// Shadcn ui
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// React
import { Link } from "react-router";
// Utils
import capitalize_string from "@/utils/capitalize_string";
// React
import { useEffect, useMemo, useState } from "react";
import Problem_Delete_Btn from "./Problem_Delete_Btn";
import Problem_Edit_Btn from "./Problem_Edit_Btn";
import Problem_Save_Btn from "./Problem_Save_Btn";
import Problem_Table_Head from "./Problem_Table_Head";
import Problem_Table_Pagination from "./Problem_Table_Pagination";

export default function Problems_Table({ all_problems, auth_user }) {
  const [search, set_search] = useState("");
  const [difficulty, set_difficulty] = useState("All");
  const [selected_tags, set_selected_tags] = useState("All");
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
      .filter((problem) => (difficulty === "All" ? true : problem?.difficulty === difficulty))
      .filter((problem) =>
        selected_tags === "All" ? true : problem?.tags?.includes(selected_tags),
      );
  }, [search, difficulty, selected_tags]);

  const items_per_page = 5;
  const total_pages = Math.ceil(filtered_problems?.length / items_per_page);

  const paginated_problems = useMemo(() => {
    return filtered_problems?.slice(
      (current_page - 1) * items_per_page,
      current_page * items_per_page,
    );
  }, [filtered_problems, current_page]);

  useEffect(() => {
    if (current_page > total_pages) set_current_page(1);
  }, [search, difficulty, selected_tags]);

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
            <SelectItem value="All">All</SelectItem>
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
            <SelectItem value="All">All</SelectItem>
            {all_tags.map((e, i) => (
              <SelectItem key={i} value={e}>
                {capitalize_string(e)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <Problem_Table_Head />
        <TableBody>
          {paginated_problems?.map(({ id, title, difficulty, tags, solved }) => {
            return (
              <TableRow key={id}>
                <TableCell className="!pr-2">
                  <Checkbox
                    id="terms2"
                    checked={solved?.some((user) => user?.solved_by === auth_user?.id)}
                    readOnly
                  />
                </TableCell>
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    {auth_user?.role === "admin" && (
                      <>
                        <Problem_Delete_Btn id={id} />
                        <Problem_Edit_Btn id={id} />
                      </>
                    )}
                    <Problem_Save_Btn id={id} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Problem_Table_Pagination
        current_page={current_page}
        total_pages={total_pages}
        set_current_page={set_current_page}
      />
    </div>
  );
}
