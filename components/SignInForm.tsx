"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/libs/actions";
import { useFormState } from "react-dom";
import { SignInSchema } from "@/libs/zod";
import FormToggle from "./FormToggle";
import PasswordLink from "./PasswordLink";

// const formSchema = z.object({
//   email: z.string().email({ message: "Enter a valid email" }),
//   password: z
//     .string()
//     .min(4, { message: "Enter a password of at least 4 characters" })
//     .max(20, { message: "Password must be at most 20 characters" }),
// });

// interface FormValues {
//   email: string;
//   password: string;
// }

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(signIn, undefined);

  function onSubmit(formData: z.infer<typeof SignInSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);
    formAction(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative w-full min-w-[300px] max-w-[320px] space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative pb-5">
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="rounded-md border border-zinc-600 px-4 py-2 focus-visible:ring-1 focus-visible:ring-offset-0"
                    style={{ marginTop: "0" }}
                  />
                </FormControl>
                <FormMessage
                  className="absolute bottom-0 left-0"
                  style={{ marginTop: "0" }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative pb-5">
                <FormLabel className="text-base">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="false"
                    {...field}
                    className="rounded-md border border-zinc-600 px-4 py-2 focus-visible:ring-1 focus-visible:ring-offset-0"
                    style={{ marginTop: "0" }}
                  />
                </FormControl>
                <FormMessage className="absolute" style={{ marginTop: "0" }} />
              </FormItem>
            )}
          />
          <div className="pb-5">
            <Button
              type="submit"
              variant="outline"
              className="mt-1 rounded-md border border-zinc-600 px-4 py-2"
            >
              Sign In
            </Button>
            {state?.error && (
              <p
                className="bottom-(-10px) absolute left-0 text-sm font-medium text-destructive"
                style={{ marginTop: "1" }}
              >
                {state.error}
              </p>
            )}
          </div>
          {process.env.NODE_ENV === "development" ? <FormToggle /> : null}
          <PasswordLink />
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
