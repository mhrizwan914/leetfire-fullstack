// Store
import { use_problem_store } from "@/store/use_problem_store";
import { use_auth_store } from "@/store/use_auth_store";
// React
import { useEffect } from "react";
// Components
import Problems_Table from "./Problems_Table";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";

export default function Show_All_Problems() {
  const { problem_get_all, all_problems, is_getting_all_problems, is_problem_deleting } =
    use_problem_store();
  const { auth_user } = use_auth_store();
  const { toast } = useToast();

  useEffect(() => {
    if (auth_user && auth_user.id && !all_problems) problem_get_all(toast);
  }, []);

  useEffect(() => {
    if (all_problems) problem_get_all(toast);
  }, [is_problem_deleting]);

  if (is_getting_all_problems) {
    return (
      <section>
        <div className="py-20 text-center">
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
        <div className="py-20 text-center">
          <div className="container">
            <div className="We are fatching problems">No problems found ☹</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="py-20">
        <div className="container">
          {all_problems && <Problems_Table all_problems={all_problems} auth_user={auth_user} />}
        </div>
      </div>
    </section>
  );
}
