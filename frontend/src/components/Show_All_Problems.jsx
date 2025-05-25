// Store
import { use_problem_store } from "@/store/use_problem_store";
import { use_auth_store } from "@/store/use_auth_store";
// React
import { useEffect } from "react";
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
// React
import { Link } from "react-router";
// Utils
import capitalize_string from "@/utils/capitalize_string";
// Icons
import { CheckCircle, PenBox, Trash2 } from "lucide-react";

export default function Show_All_Problems() {
  const { problem_get_all, all_problems, is_getting_all_problems } = use_problem_store();
  const { auth_user } = use_auth_store();

  useEffect(() => {
    if (auth_user && auth_user.id) problem_get_all();
  }, []);

  if (is_getting_all_problems) {
    return (
      <section>
        <div className="pt-20 text-center">
          <div className="container">
            <div className="We are fatching problems">We are trying to display all problems</div>
          </div>
        </div>
      </section>
    );
  }

  if (!all_problems && !is_getting_all_problems) {
    return (
      <section>
        <div className="pt-20 text-center">
          <div className="container">
            <div className="We are fatching problems">No problems found ☹</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="pt-20">
        <div className="container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Topics</TableHead>
                <TableHead>Solved</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {all_problems.map(({ id, title, difficulty, tags, solved }) => {
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <Link to={`/dashboard/problem/${id}`}>{title}</Link>
                    </TableCell>
                    <TableCell>{capitalize_string(difficulty)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {tags.map((e) => (
                          <Badge key={e} variant="secondary">
                            {capitalize_string(e)}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {solved?.some((user) => user?.solved_by === auth_user?.id) ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        "❌"
                      )}
                    </TableCell>
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
