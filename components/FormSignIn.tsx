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
import { signIn } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SignInSchema } from "@/lib/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { RocketIcon } from "lucide-react";
import InputPassword from "./InputPassword";
import Link from "next/link";

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

const FormSignIn = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(signIn, undefined);

  function handleSubmit(formData: z.infer<typeof SignInSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);
    formAction(data);
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <RocketIcon size={24} />
          <span>Sign In</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="name@examplle.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {process.env.NODE_ENV === "development" ? (
          <div className="flex w-full items-center justify-between">
            <span className="text-xs">Don&apos;t have an account?</span>

            <Link
              className="text-xs font-semibold text-primary hover:underline"
              href="/signup"
            >
              Sign Up
            </Link>
          </div>
        ) : null}
        <div className="flex w-full items-center justify-between">
          <span className="text-xs">Forgot your password?</span>
          <Link
            className="text-xs font-semibold text-primary hover:underline"
            href="/password/forgot"
          >
            Reset Password
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FormSignIn;
