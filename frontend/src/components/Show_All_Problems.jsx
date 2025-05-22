// Store
import { use_problem_store } from "@/store/use_problem_store";
import { use_auth_store } from "@/store/use_auth_store";
// React
import { useEffect } from "react";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";
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
// React
import { Link } from "react-router";
// Utils
import capitalize_string from "@/utils/capitalize_string";

export default function Show_All_Problems() {
  const { problem_get_all, all_problems, is_getting_all_problems } = use_problem_store();
  const { auth_user } = use_auth_store();
  const { toast } = useToast();

  const handle_problem_get_all = async () => {
    try {
      const data = await problem_get_all();
      toast({
        title: "All problems found successfully",
        description: (
          <pre>
            <code>
              {JSON.stringify(
                data,
                (key, value) => {
                  if (key === "data") return undefined;
                  return value;
                },
                2,
              )}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "You are facing issue",
        description: (
          <pre>
            <code>
              {JSON.stringify(
                error?.response?.data || error,
                (key, value) => {
                  if (key === "stack") return undefined;
                  return value;
                },
                2,
              )}
            </code>
          </pre>
        ),
      });
    }
  };

  useEffect(() => {
    if (!all_problems) handle_problem_get_all();
  }, []);

  if (is_getting_all_problems) {
    return "We are fatching problems";
  }

  if (all_problems == null && !is_getting_all_problems) {
    return "No problems found.";
  }
  return (
    <section>
      <div className="pt-20">
        <div className="container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Solved</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Topics</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {all_problems.map(({ id, title, difficulty, tags, solved }) => {
                return (
                  <TableRow key={id}>
                    <TableCell>
                      {capitalize_string(
                        String(solved.some((user) => user.solved_by === auth_user.id)),
                      )}
                    </TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{capitalize_string(difficulty)}</TableCell>
                    <TableCell>
                      {tags.map((e) => (
                        <Badge key={e} variant="secondary">
                          {capitalize_string(e)}
                        </Badge>
                      ))}
                    </TableCell>
                    <TableCell>
                      <Button asChild>
                        <Link to={id}>View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
