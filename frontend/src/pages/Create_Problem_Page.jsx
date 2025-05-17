// Pages
import Private from "@/layouts/private";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

export default function Add_Problem_Page() {
  const { problem_create } = use_problem_store();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(create_problem_schema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "",
      tags: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);

    // try {
    //   const data = await problem_create(values);
    //   navigate("/dashboard", { replace: true });
    //   toast({
    //     title: "Problem is created successfully",
    //     description: (
    //       <pre>
    //         <code>
    //           {JSON.stringify(
    //             data,
    //             (key, value) => {
    //               if (key === "data") return undefined;
    //               return value;
    //             },
    //             2,
    //           )}
    //         </code>
    //       </pre>
    //     ),
    //   });
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "You are facing issue",
    //     description: (
    //       <pre>
    //         <code>
    //           {JSON.stringify(
    //             error?.response?.data || error,
    //             (key, value) => {
    //               if (key === "stack") return undefined;
    //               return value;
    //             },
    //             2,
    //           )}
    //         </code>
    //       </pre>
    //     ),
    //   });
    // }
  }
  return (
    <Private>
      <section>
        <div className="py-5">
          <div className="container">
            <h2 className="font-bold text-2xl text-center">Create a Problem</h2>
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Button type="submit">Login</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Private>
  );
}
