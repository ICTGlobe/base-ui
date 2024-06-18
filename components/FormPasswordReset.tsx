"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { PasswordResetSchema } from "@/lib/zod";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordReset } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";
import InputPassword from "./InputPassword";

const FormPasswordReset = () => {
  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: { email: "", token: "", password: "", confirmPassword: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(
    passwordReset,
    undefined,
  );

  const handleSubmit = (formData: z.infer<typeof PasswordResetSchema>) => {
    console.log("handleSubmit data", formData);
    const data = new FormData();
    data.append("email", formData.email);
    data.append("token", formData.token);
    data.append("password", formData.password);
    data.append("confirmPassword", formData.confirmPassword);
    formAction(data);
  };

  // TODO: Get email and token from query params
  const email = "ch_6@ictlabs.io";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRkdG5lZWdnbnRzbTNwenBiY25pbnZnciIsIm5hbWUiOiJjcmFpZ19pY3RsYWJzIDYiLCJlbWFpbCI6ImNoXzZAaWN0bGFicy5pbyIsImRhdGFiYXNlTmFtZSI6InFkZGh3bGJqaWh2aHZoenAiLCJpYXQiOjE3MTc2NjA0OTMsImV4cCI6MTcxNzc0Njg5M30.tDjcwn1ArpuBnfjBgzkBpu_qwFkAzRNGxReLQ_WRx1I";

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => <Input type="hidden" {...field} />}
              />

              <FormField
                control={form.control}
                name="token"
                render={({ field }) => <Input type="hidden" {...field} />}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">New Password</FormLabel>
                    <FormControl>
                      <InputPassword
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <InputPassword
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Reset</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {state?.success && redirect("/signin")}
          {state?.error && (
            <p
              className="text-sm font-medium text-destructive"
              style={{ marginTop: "1" }}
            >
              {state.error}
            </p>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default FormPasswordReset;
