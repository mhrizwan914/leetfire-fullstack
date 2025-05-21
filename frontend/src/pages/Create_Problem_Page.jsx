// Pages
import Private from "@/layouts/private";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
// Shadcn ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Forms schema
import { create_problem_schema } from "@/utils/forms_schema";
// Store
import { use_problem_store } from "@/store/use_problem_store";
// React router
import { useNavigate } from "react-router";
// Editor
import Editor from "@monaco-editor/react";
// Icons
import {
  Plus,
  Trash2,
  Code2,
  FileText,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Download,
} from "lucide-react";

const sample_data = {
  title: "Climbing Stairs",
  description:
    "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
  difficulty: "easy",
  tags: ["Dynamic Programming", "Math", "Memoization"],
  constraints: "1 <= n <= 45",
  hints: "To reach the nth step, you can either come from the (n-1)th step or the (n-2)th step.",
  editorial:
    "This is a classic dynamic programming problem. The number of ways to reach the nth step is the sum of the number of ways to reach the (n-1)th step and the (n-2)th step, forming a Fibonacci-like sequence.",
  test_cases: [
    {
      input: "2",
      output: "2",
    },
    {
      input: "3",
      output: "3",
    },
    {
      input: "4",
      output: "5",
    },
  ],
  examples: {
    JAVASCRIPT: {
      input: "n = 2",
      output: "2",
      explanation: "There are two ways to climb to the top:\n1. 1 step + 1 step\n2. 2 steps",
    },
    PYTHON: {
      input: "n = 3",
      output: "3",
      explanation:
        "There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
    },
    JAVA: {
      input: "n = 4",
      output: "5",
      explanation:
        "There are five ways to climb to the top:\n1. 1 step + 1 step + 1 step + 1 step\n2. 1 step + 1 step + 2 steps\n3. 1 step + 2 steps + 1 step\n4. 2 steps + 1 step + 1 step\n5. 2 steps + 2 steps",
    },
  },
  code_snippets: {
    JAVASCRIPT: `/**
* @param {number} n
* @return {number}
*/
function climbStairs(n) {
// Write your code here
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.on('line', (line) => {
const n = parseInt(line.trim());
const result = climbStairs(n);

console.log(result);
rl.close();
});`,
    PYTHON: `class Solution:
  def climbStairs(self, n: int) -> int:
      # Write your code here
      pass

# Input parsing
if __name__ == "__main__":
  import sys
  
  # Parse input
  n = int(sys.stdin.readline().strip())
  
  # Solve
  sol = Solution()
  result = sol.climbStairs(n)
  
  # Print result
  print(result)`,
    JAVA: `import java.util.Scanner;

class Main {
  public int climbStairs(int n) {
      // Write your code here
      return 0;
  }
  
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int n = Integer.parseInt(scanner.nextLine().trim());
      
      // Use Main class instead of Solution
      Main main = new Main();
      int result = main.climbStairs(n);
      
      System.out.println(result);
      scanner.close();
  }
}`,
  },
  reference_solutions: {
    JAVASCRIPT: `/**
* @param {number} n
* @return {number}
*/
function climbStairs(n) {
// Base cases
if (n <= 2) {
  return n;
}

// Dynamic programming approach
let dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

return dp[n];

/* Alternative approach with O(1) space
let a = 1; // ways to climb 1 step
let b = 2; // ways to climb 2 steps

for (let i = 3; i <= n; i++) {
  let temp = a + b;
  a = b;
  b = temp;
}

return n === 1 ? a : b;
*/
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.on('line', (line) => {
const n = parseInt(line.trim());
const result = climbStairs(n);

console.log(result);
rl.close();
});`,
    PYTHON: `class Solution:
  def climbStairs(self, n: int) -> int:
      # Base cases
      if n <= 2:
          return n
      
      # Dynamic programming approach
      dp = [0] * (n + 1)
      dp[1] = 1
      dp[2] = 2
      
      for i in range(3, n + 1):
          dp[i] = dp[i - 1] + dp[i - 2]
      
      return dp[n]
      
      # Alternative approach with O(1) space
      # a, b = 1, 2
      # 
      # for i in range(3, n + 1):
      #     a, b = b, a + b
      # 
      # return a if n == 1 else b

# Input parsing
if __name__ == "__main__":
  import sys
  
  # Parse input
  n = int(sys.stdin.readline().strip())
  
  # Solve
  sol = Solution()
  result = sol.climbStairs(n)
  
  # Print result
  print(result)`,
    JAVA: `import java.util.Scanner;

class Main {
  public int climbStairs(int n) {
      // Base cases
      if (n <= 2) {
          return n;
      }
      
      // Dynamic programming approach
      int[] dp = new int[n + 1];
      dp[1] = 1;
      dp[2] = 2;
      
      for (int i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
      
      return dp[n];
      
      /* Alternative approach with O(1) space
      int a = 1; // ways to climb 1 step
      int b = 2; // ways to climb 2 steps
      
      for (int i = 3; i <= n; i++) {
          int temp = a + b;
          a = b;
          b = temp;
      }
      
      return n == 1 ? a : b;
      */
  }
  
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int n = Integer.parseInt(scanner.nextLine().trim());
      
      // Use Main class instead of Solution
      Main main = new Main();
      int result = main.climbStairs(n);
      
      System.out.println(result);
      scanner.close();
  }
}`,
  },
};

export default function Create_Problem_Page() {
  const { problem_create } = use_problem_store();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(create_problem_schema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "",
      tags: [""],
      constraints: "",
      hints: "",
      editorial: "",
      test_cases: [{ input: "", output: "" }],
      examples: {
        JAVASCRIPT: { input: "", output: "", explanation: "" },
        PYTHON: { input: "", output: "", explanation: "" },
        JAVA: { input: "", output: "", explanation: "" },
      },
      code_snippets: {
        JAVASCRIPT: "function solution() {\n  // Write your code here\n}",
        PYTHON: "def solution():\n    # Write your code here\n    pass",
        JAVA: "public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      },
      reference_solutions: {
        JAVASCRIPT: "// Add your reference solution here",
        PYTHON: "# Add your reference solution here",
        JAVA: "// Add your reference solution here",
      },
    },
  });
  const { control, reset } = form;
  const {
    fields: test_cases_fields,
    append: test_cases_append,
    remove: test_cases_remove,
  } = useFieldArray({
    control,
    name: "test_cases",
  });
  const handle_load_sample_data = () => {
    reset({
      ...sample_data,
      tags: sample_data.tags.join(" "),
    });
  };
  async function onSubmit(values) {
    try {
      const data = await problem_create(values);
      navigate("/dashboard", { replace: true });
      toast({
        title: "Problem is created successfully",
        description: (
          <pre>
            <code>
              {JSON.stringify(
                data,
                (key, value) => {
                  if (key === "problem") return undefined;
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
  }
  return (
    <Private>
      <section>
        <div className="py-5">
          <div className="container">
            <h2 className="font-bold text-2xl text-center">Create Problem</h2>
            <Button type="button" onClick={() => handle_load_sample_data()}>
              Load Sample Data
            </Button>
            <div className="dark:bg-white/80 p-5 rounded-md bg-black/80 mt-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Add two numbers" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Given two numbers, add them together and return the result."
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Difficulty</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a difficulty level of problem" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="arithmetic operators numbers"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="constraints"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Constraints</FormLabel>
                        <FormControl>
                          <Input placeholder="-10^9 < a, b < 10^9" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hints"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hints</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Split the input string by space to extract two numbers."
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="editorial"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Editorial</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="You are given two integers as input. Your task is to return their sum."
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    className="block"
                    onClick={() => test_cases_append({ input: "", output: "" })}>
                    Add Test Cases
                  </Button>
                  {test_cases_fields.map((e, index) => (
                    <div key={e.id} className="flex items-end justify-between gap-5">
                      <div className="grid grid-cols-2 gap-x-5 flex-1">
                        <FormField
                          control={form.control}
                          name={`test_cases.${index}.input`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Input</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter input" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`test_cases.${index}.output`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Output</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter output" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => test_cases_remove(index)}>
                        <Trash2
                          className="h-4 w-4 text-black/80 dark:text-white/80 cursor-pointer"
                          aria-hidden="true"
                        />
                      </Button>
                    </div>
                  ))}
                  {["JAVASCRIPT", "PYTHON", "JAVA"].map((e, i) => (
                    <div key={e} className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center gap-2 dark:text-black/80 text-white/80">
                        <Code2 className="w-5 h-5" />
                        {e}
                      </h3>
                      <div className="card bg-base-100 shadow-md">
                        <div className="card-body p-4 md:p-6">
                          <h4 className="text-lg font-semibold flex items-center gap-2 dark:text-black/80 text-white/80 mb-5">
                            Code Snippets
                          </h4>
                          <FormField
                            control={form.control}
                            name={`code_snippets.${e}`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Editor
                                    height="300px"
                                    language={e.toLowerCase()}
                                    theme="vs-dark"
                                    value={field.value}
                                    onChange={field.onChange}
                                    options={{
                                      minimap: { enabled: false },
                                      fontSize: 14,
                                      lineNumbers: "on",
                                      roundedSelection: false,
                                      scrollBeyondLastLine: false,
                                      automaticLayout: true,
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="card bg-base-100 shadow-md">
                        <div className="card-body p-4 md:p-6">
                          <h4 className="text-lg font-semibold flex items-center gap-2 dark:text-black/80 text-white/80 mb-5">
                            Reference Solution
                          </h4>
                          <FormField
                            control={form.control}
                            name={`reference_solutions.${e}`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Editor
                                    height="300px"
                                    language={e.toLowerCase()}
                                    theme="vs-dark"
                                    value={field.value}
                                    onChange={field.onChange}
                                    options={{
                                      minimap: { enabled: false },
                                      fontSize: 14,
                                      lineNumbers: "on",
                                      roundedSelection: false,
                                      scrollBeyondLastLine: false,
                                      automaticLayout: true,
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="flex items-end justify-between gap-5">
                        <div className="grid grid-cols-2 gap-x-5 flex-1">
                          <FormField
                            control={form.control}
                            name={`examples.${e}.input`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Input</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter input" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`examples.${e}.output`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Output</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter output" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name={`examples.${e}.explanation`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Explanation</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter input" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button type="submit">Create a Problem</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Private>
  );
}
