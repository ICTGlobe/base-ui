"use client";

import { z } from "zod";
import { PasswordForgotSchema } from "@/lib/zod";
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
import { passwordForgot } from "@/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";
import { redirect } from "next/navigation";

const PasswordForgotForm = () => {
  const form = useForm<z.infer<typeof PasswordForgotSchema>>({
    resolver: zodResolver(PasswordForgotSchema),
    defaultValues: { email: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(
    passwordForgot,
    undefined,
  );

  function onSubmit(formData: z.infer<typeof PasswordForgotSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("email", formData.email);
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
                <FormLabel className="text-base">
                  Enter your email below to reset
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="rounded-md border border-zinc-600 px-4 py-2 focus-visible:ring-1 focus-visible:ring-offset-0"
                    style={{ marginTop: "0" }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="pb-5">
            <Button
              type="submit"
              variant="outline"
              className="mt-1 rounded-md border border-zinc-600 px-4 py-2"
            >
              Reset
            </Button>
            {state?.success && redirect("/signin")}
            {state?.error && (
              <p
                className="bottom-(-10px) absolute left-0 text-sm font-medium text-destructive"
                style={{ marginTop: "1" }}
              >
                {state.error}
              </p>
            )}
          </div>
          <div className="flex w-full">
            <p className="text-sm">
              Return to sign in?{" "}
              <Link
                className="font-semibold text-zinc-900 hover:underline"
                href="/signin"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </>
  );
};

export default PasswordForgotForm;
