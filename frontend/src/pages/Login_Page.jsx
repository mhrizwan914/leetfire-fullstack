import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Shadcn ui
import { useToast } from "@/hooks/use-toast";
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
// Forms schema
import { login_schema } from "@/utils/forms_schema";
// Icons
import { EyeIcon, EyeOffIcon } from "lucide-react";
// React
import { useState } from "react";
// Store
import { use_auth_store } from "@/store/use_auth_store";
// React router
import { Link, useNavigate } from "react-router";

export default function Login_Page() {
  const { login, is_logging } = use_auth_store();
  const [toggle_password, set_toggle_password] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(login_schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    const status = await login(values, toast);
    if (status === 200) {
      navigate("/dashboard", { replace: true });
    }
  }

  return (
    <section>
      <div className="py-20">
        <div className="container">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-center">Login</h2>
            <div className="dark:bg-white/80 p-5 rounded-md bg-black/80 max-w-[500px] mx-auto my-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                  <Button disabled={is_logging} type="submit">
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <p className="text-center">
              Don't have an account? please{" "}
              <Link className="underline underline-offset-2 text-primary/80" to="/signup">
                signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
