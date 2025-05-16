import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Shadcn ui
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// Forms schema
import { signup_schema } from "@/utils/forms_schema";
// Icons
import { EyeIcon, EyeOffIcon } from "lucide-react";
// React
import { useState } from "react";
// Store
import { use_user_store } from "@/store/use_user_store";
// React router
import { Link, useNavigate } from "react-router";

export default function Signup_Page() {
  const [toggle_password, set_toggle_password] = useState(false);
  const { toast } = useToast();
  const { signup, is_signing } = use_user_store();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signup_schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      const data = await signup(values);
      navigate("/login", { replace: true });
      toast({
        title: "User register successfully",
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
        title: "You are facing this issues",
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
    <section>
      <div className="py-20">
        <div className="container">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-center">Signup</h2>
            <div className="dark:bg-white/80 p-5 rounded-md bg-black/80 max-w-[500px] mx-auto my-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="john" type="text" {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@gmail.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              placeholder="********"
                              type={toggle_password ? "text" : "password"}
                              {...field}
                            />
                          </FormControl>
                          <div className="absolute top-0 right-3 bottom-0 flex items-center justify-center">
                            {toggle_password ? (
                              <EyeIcon
                                className="h-4 w-4 dark:text-black/80 text-white/80 cursor-pointer"
                                aria-hidden="true"
                                onClick={() => set_toggle_password((prev) => !prev)}
                              />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4 dark:text-black/80 text-white/80 cursor-pointer"
                                aria-hidden="true"
                                onClick={() => set_toggle_password((prev) => !prev)}
                              />
                            )}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button disabled={is_signing} type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
            <p className="text-center">
              Already have an account? please{" "}
              <Link className="underline underline-offset-2 text-primary/80" to="/login">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
