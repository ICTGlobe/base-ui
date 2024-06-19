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
import { signUp } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SignUpSchema } from "@/lib/zod";
import { redirect } from "next/navigation";
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

const FormSignUp = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(signUp, undefined);

  function handelSubmit(formData: z.infer<typeof SignUpSchema>) {
    console.log("onSubmit values", formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    formAction(data);
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <RocketIcon size={24} />
          <span>Sign Up</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handelSubmit)}
          >
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Your name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="team">Team</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            {/* {accountType === "team" && (
                <>
                  <FormField
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team name</FormLabel>
                        <FormControl>
                          <Input placeholder="Team name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )} */}

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      {...field}
                    />
                  </FormControl>
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

            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>I accept the terms and conditions</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      By signing up you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:underline"
                      >
                        terms and conditions
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

            <Button type="submit">Sign up</Button>

            {state?.success && redirect("/dashboard")}
            {state?.error && (
              <p
                className="text-sm font-medium text-destructive"
                style={{ marginTop: "1" }}
              >
                {state.error}
              </p>
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="">
        <div className="flex w-full items-center justify-between">
          <span className="text-xs">Already have an account?</span>
          <Link
            className="text-xs font-semibold text-primary hover:underline"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FormSignUp;
