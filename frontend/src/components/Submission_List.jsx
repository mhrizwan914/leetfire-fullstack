// Icons
import { CheckCircle2, XCircle, Clock, MemoryStick as Memory, Calendar } from "lucide-react";
// Shadcn ui
import { Badge } from "./ui/badge";
// Utils
import capitalize_string from "@/utils/capitalize_string";

export default function Submission_List({ submissions }) {
  // Helper function to safely parse JSON strings
  const handle_parse_json = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data:", error);
      return [];
    }
  };

  const calculate_memory = (memory) => {
    const parse_memory = handle_parse_json(memory)?.map((e) => Number(e.split(" ")[0]));
    if (parse_memory?.length === 0) {
      return 0;
    }
    return parse_memory?.reduce((acc, curr) => acc + curr) / parse_memory?.length;
  };

  const calculate_time = (time) => {
    const parse_time = handle_parse_json(time)?.map((e) => Number(e.split(" ")[0]));
    if (parse_time?.length === 0) {
      return 0;
    }
    return parse_time?.reduce((acc, curr) => acc + curr) / parse_time?.length;
  };

  if (!submissions) {
    return <p className="text-center">No submissions yet</p>;
  }

  return (
    <div className="space-y-4">
      {submissions.map(({ status, memory, time, id, language, createdAt }) => {
        return (
          <div key={id} className="">
            <div className="bg-white/10 rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {status === "accepted" ? (
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">{capitalize_string(status)}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-error">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">{capitalize_string(status)}</span>
                    </div>
                  )}
                  <Badge>{language}</Badge>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>{calculate_time(time).toFixed(3)} s</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Memory className="w-5 h-5 text-blue-500" />
                    <span>{calculate_memory(memory).toFixed(0)} KB</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
