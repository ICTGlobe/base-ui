"use client";

import { z } from "zod";
import { PasswordResetSchema } from "@/lib/zod";
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
import { passwordReset } from "@/lib/actions";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

const PasswordResetForm = () => {
  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: { email: "", token: "", password: "", confirmPassword: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(
    passwordReset,
    undefined,
  );

  function onSubmit(formData: z.infer<typeof PasswordResetSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("email", formData.email);
    data.append("token", formData.token);
    data.append("password", formData.password);
    data.append("confirmPassword", formData.confirmPassword);
    formAction(data);
  }

  // TODO: Get email and token from query params
  const email = "ch_6@ictlabs.io";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkdG5lZWdnbnRzbTNwenBiY25pbnZnciIsIm5hbWUiOiJjcmFpZ19pY3RsYWJzIDYiLCJlbWFpbCI6ImNoXzZAaWN0bGFicy5pbyIsImRhdGFiYXNlTmFtZSI6InFkZGh3bGJqaWh2aHZoenAiLCJpYXQiOjE3MTc2NjA0OTMsImV4cCI6MTcxNzc0Njg5M30.tDjcwn1ArpuBnfjBgzkBpu_qwFkAzRNGxReLQ_WRx1I";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full min-w-[300px] max-w-[320px] space-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => <Input type="hidden" {...field} />}
        ></FormField>

        <FormField
          control={form.control}
          name="token"
          render={({ field }) => <Input type="hidden" {...field} />}
        ></FormField>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative pb-5">
              <FormLabel className="text-base">New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="New Password"
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
                  type="password"
                  placeholder="Confirm Password"
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
      </form>
    </Form>
  );
};

export default PasswordResetForm;
