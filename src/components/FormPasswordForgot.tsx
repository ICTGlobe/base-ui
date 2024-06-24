"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordForgotSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { passwordForgot } from "@/lib/actions";
import { Input } from "./ui/input";

const FormPasswordForgot = () => {
  const form = useForm<z.infer<typeof PasswordForgotSchema>>({
    resolver: zodResolver(PasswordForgotSchema),
    defaultValues: { email: "" },
  });

  const [state, formAction] = useFormState<any, FormData>(
    passwordForgot,
    undefined,
  );

  const handleSubmit = (formData: z.infer<typeof PasswordForgotSchema>) => {
    console.log("handleSubmit data", formData);
    const data = new FormData();
    data.append("email", formData.email);
    formAction(data);
  };

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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">
                      Enter your email to reset password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Reset</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default FormPasswordForgot;
