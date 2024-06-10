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
import { signUp } from "@/libs/actions";
import { useFormState } from "react-dom";
import { SignUpSchema } from "@/libs/zod";
import { redirect } from "next/navigation";
import FormToggle from "./FormToggle";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(signUp, undefined);

  function onSubmit(formData: z.infer<typeof SignUpSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    formAction(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full min-w-[300px] max-w-[320px] space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative pb-5">
              <FormLabel className="text-base">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="relative pb-5">
              <FormLabel className="text-base">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
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
            Sign Up
          </Button>
          {state?.success && redirect("/dashboard")}
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
      </form>
    </Form>
  );
};

export default SignUpForm;
