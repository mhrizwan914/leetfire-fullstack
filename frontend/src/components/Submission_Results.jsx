// Icons
import { CheckCircle2, XCircle, Clock, MemoryStick as Memory } from "lucide-react";
// Shadcn ui
import { Badge } from "./ui/badge";
// Utils
import capitalize_string from "@/utils/capitalize_string";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Submission_Result({ submission }) {
  // Parse stringified arrays
  const memoryArr = JSON.parse(submission.memory || "[]");
  const timeArr = JSON.parse(submission.time || "[]");

  // Calculate averages
  const avgMemory =
    memoryArr
      .map((m) => parseFloat(m)) // remove ' KB' using parseFloat
      .reduce((a, b) => a + b, 0) / memoryArr.length;

  const avgTime =
    timeArr
      .map((t) => parseFloat(t)) // remove ' s' using parseFloat
      .reduce((a, b) => a + b, 0) / timeArr.length;

  const passedTests = submission.test_cases.filter((tc) => tc.passed).length;
  const totalTests = submission.test_cases.length;
  const successRate = (passedTests / totalTests) * 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-base-200 shadow-lg">
          <div className=" p-4">
            <h3 className="card-title text-sm">Status</h3>
            <div
              className={`text-lg font-bold ${
                submission.status === "accepted" ? "text-green-500" : "text-red-500"
              }`}>
              {capitalize_string(submission.status)}
            </div>
          </div>
        </div>

        <div className=" bg-base-200 shadow-lg">
          <div className="p-4">
            <h3 className="text-sm">Success Rate</h3>
            <div className="text-lg font-bold">{successRate.toFixed(1)}%</div>
          </div>
        </div>

        <div className="bg-base-200 shadow-lg">
          <div className="p-4">
            <h3 className="text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Avg. Runtime
            </h3>
            <div className="text-lg font-bold">{avgTime.toFixed(3)} s</div>
          </div>
        </div>

        <div className="bg-base-200 shadow-lg">
          <div className="p-4">
            <h3 className="text-sm flex items-center gap-2">
              <Memory className="w-4 h-4" />
              Avg. Memory
            </h3>
            <div className="text-lg font-bold">{avgMemory.toFixed(0)} KB</div>
          </div>
        </div>
      </div>
      <div className="bg-base-100 shadow-xl">
        <div className="">
          <h4 className="text-primary text-xl font-bold mb-5">Test Cases Results</h4>
          <div className="">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-black/80">Status</TableHead>
                  <TableHead className="text-black/80">Expected Output</TableHead>
                  <TableHead className="text-black/80">Your Output</TableHead>
                  <TableHead className="text-black/80">Memory</TableHead>
                  <TableHead className="text-black/80">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submission.test_cases.map(
                  ({ id, status, expected_output, std_output, memory, time }) => (
                    <TableRow key={id} className="hover:bg-transparent">
                      <TableCell>
                        {status === "passed" ? (
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Passed
                          </div>
                        ) : (
                          <div className="flex items-center gap-2.5">
                            <XCircle className="w-5 h-5 text-red-500" />
                            Failed
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{expected_output}</TableCell>
                      <TableCell>{std_output || "null"}</TableCell>
                      <TableCell>{memory}</TableCell>
                      <TableCell>{time}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
