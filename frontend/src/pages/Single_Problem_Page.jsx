// Store
import { use_problem_store } from "@/store/use_problem_store";
import { use_auth_store } from "@/store/use_auth_store";
import { use_problem_execution_store } from "@/store/use_problem_execution_store";
import { use_submissions_store } from "@/store/use_submissions_store";
// Layouts
import Private from "@/layouts/private";
// React router
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Icons
import { BadgeCheck, Clock, Home, Send } from "lucide-react";
// Components
import Problem_Save_Btn from "@/components/Problem_Save_Btn";
import Submission_List from "@/components/Submission_List";
// Shadcn ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// Editor
import Editor from "@monaco-editor/react";

export default function Single_Problem_Page() {
  const { id } = useParams();
  const { problem_get_by_id, problem, is_getting_problem } = use_problem_store();
  const { auth_user } = use_auth_store();
  const { is_executing, submission, problem_execution } = use_problem_execution_store();
  const {
    is_loading,
    submission_counts,
    submission_count,
    submission_by_id,
    submission: all_submissions,
  } = use_submissions_store();
  const [selected_lang, set_selected_lang] = useState(null);
  const [code_editor, set_scode_editor] = useState("");
  const [test_cases, set_test_cases] = useState([]);
  const [total_submissions, set_total_submissions] = useState(0);
  const [success_rate, set_success_rate] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    problem_get_by_id(id, toast);
    submission_by_id(id, toast);
  }, [id]);

  useEffect(() => {
    submission_count(id, toast);
  }, [id, submission]);

  useEffect(() => {
    if (problem && !is_getting_problem) {
      submission_by_id(id, toast);
    }
  }, [submission]);

  useEffect(() => {
    if (problem) {
      set_selected_lang(Object.keys(problem?.code_snippets)?.[0]);
    }
  }, [problem]);

  useEffect(() => {
    if (problem && selected_lang) {
      set_scode_editor(problem?.code_snippets[selected_lang] || "");
    }
  }, [problem, selected_lang]);

  useEffect(() => {
    if (submission_counts && !is_loading && all_submissions) {
      const successful = all_submissions.filter((sub) => sub?.status === "accepted");

      const success_rate =
        submission_counts > 0 ? (successful.length / submission_counts) * 100 : 0;

      set_total_submissions(submission_counts);
      set_success_rate(success_rate.toFixed());
    } else {
      set_total_submissions(0);
      set_success_rate(0);
    }
  }, [submission_counts, id, problem, all_submissions]);

  const handle_language_change = (e) => {
    set_selected_lang(e);
    set_scode_editor(problem?.code_snippets[e] || "");
  };

  const handle_execute_code = async () => {
    const body = {
      language: selected_lang,
      std_input: problem?.test_cases?.map(({ input }) => input),
      expected_output: problem?.test_cases?.map(({ input }) => input),
      code: code_editor,
    };
    await problem_execution(id, body, toast);
  };

  if (is_getting_problem) {
    return (
      <Private>
        <section>
          <div className="py-20 text-center">
            <div className="container">
              <div className="We are fatching problems">We are trying to display problem</div>
            </div>
          </div>
        </section>
      </Private>
    );
  }

  if (!problem && !is_getting_problem) {
    return (
      <Private>
        <section>
          <div className="py-20 text-center">
            <div className="container">
              <div className="We are fatching problems">No problem found ☹</div>
            </div>
          </div>
        </section>
      </Private>
    );
  }

  return (
    <Private>
      <section>
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5">
                <Link to="/dashboard">
                  <Home className="w-5 h-5 text-primary" />
                </Link>
                <span>/</span>
                <h3>{problem?.title}</h3>
              </div>
              <Problem_Save_Btn id={problem?.id} />
            </div>
            <div className="mt-5 flex justify-between items-center gap-2.5 dark:bg-white/80 px-4 py-3 rounded-md bg-black/80 dark:text-black/80 text-white/80">
              <div className="flex items-center divide-x-2 divide-primary">
                <div className="flex items-center gap-2.5 pr-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  {new Date(problem?.updatedAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="px-2 flex items-center gap-2.5">
                  <Send className="w-5 h-5 text-blue-500" />
                  Submissions {total_submissions}
                </div>
                <div className="pl-2 flex items-center gap-2.5">
                  <BadgeCheck className="w-5 h-5 text-blue-500" />
                  Success {success_rate}%
                </div>
              </div>
              <div>
                <Select value={selected_lang} onValueChange={handle_language_change}>
                  <SelectTrigger className="!w-[140px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(problem?.code_snippets).map((e, i) => (
                      <SelectItem key={i} value={e}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
              <div>
                <Tabs defaultValue="description">
                  <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="submissions">Submissions</TabsTrigger>
                    <TabsTrigger value="discussion">Discussion</TabsTrigger>
                    <TabsTrigger value="hints">Hints</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description">
                    <p>Q: {problem?.description}</p>
                    <h3 className="font-bold text-xl my-5 text-primary">Examples</h3>
                    <Tabs defaultValue={Object.keys(problem?.examples)[0]}>
                      <TabsList>
                        {Object.keys(problem?.examples)?.map((e, i) => (
                          <TabsTrigger key={e} value={e}>
                            {e}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {Object.entries(problem?.examples)?.map(([language, example]) => (
                        <TabsContent key={language} value={language}>
                          <div className="mb-5 bg-black/80 p-5 rounded-md">
                            <div>
                              <h4 className="mb-3 text-primary">Input</h4>
                              <code className="bg-white/80 p-2 rounded-md text-black/80">
                                {example.input}
                              </code>
                            </div>
                            <div className="my-5">
                              <h4 className="mb-3 text-primary">Output</h4>
                              <code className="bg-white/80 p-2 rounded-md text-black/80">
                                {example.output}
                              </code>
                            </div>
                            <div>
                              <h4 className="mb-3 text-primary">Explanation</h4>
                              <p>{example.explanation}</p>
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                    {problem?.constraints && (
                      <>
                        <h3 className="font-bold text-xl my-5 text-primary">Constraints</h3>
                        <code className="bg-white/80 p-2 rounded-md text-black/80">
                          {problem?.constraints}
                        </code>
                      </>
                    )}
                    {problem?.editorial && (
                      <>
                        <h3 className="font-bold text-xl mt-5 mb-2 text-primary">Editorial</h3>
                        <p>{problem?.editorial}</p>
                      </>
                    )}
                  </TabsContent>
                  <TabsContent value="submissions">
                    {is_loading ? "Loading..." : <Submission_List submissions={all_submissions} />}
                  </TabsContent>
                  <TabsContent value="discussion">
                    {problem?.discussion ? (
                      <p>{problem?.discussion}</p>
                    ) : (
                      <p className="text-center">No discussion available</p>
                    )}
                  </TabsContent>
                  <TabsContent value="hints">
                    {problem?.hints ? (
                      <p>{problem?.hints}</p>
                    ) : (
                      <p className="text-center">No hints available</p>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
              <div>
                <Editor
                  height="600px"
                  language={selected_lang?.toLowerCase()}
                  theme="vs-dark"
                  value={code_editor}
                  onChange={(e) => set_scode_editor(e)}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
                <div className="flex justify-between gap-5 items-center mt-5">
                  <Button disabled={is_executing} onClick={handle_execute_code}>
                    Run Code
                  </Button>
                  <Button>Submit Code</Button>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-center gap-2.5 dark:bg-white/80 px-4 py-3 rounded-md bg-black/80 dark:text-black/80 text-white/80">
              <h4 className="text-primary text-lg font-bold">Test Cases</h4>
              {}
            </div>
          </div>
        </div>
      </section>
    </Private>
  );
}
