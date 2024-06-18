import { z, object, string, ZodType } from "zod";
import { SignInData, SignUpData } from "@/lib/types";

export const SignUpSchema: ZodType<SignUpData> = object({
  name: string()
    .min(2, { message: "Enter a name of at least 2 characters" })
    .max(24, { message: "Password must not be more that 24 characters" }),
  email: string().email({ message: "Enter a valid email" }),
  password: string()
    .min(8, { message: "Enter a password of at least 8 characters" })
    .max(24, { message: "Password must not be more that 24 characters" }),
  confirmPassword: string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(4, { message: "Enter a password of at least 4 characters" })
    .max(20, { message: "Password must not be more that 20 characters" }),
});

export const PasswordForgotSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
});

export const PasswordResetSchema = z
  .object({
    // ? NOTE:It will probably be better to pass the email as a query parameter
    // ? along with the token
    // ? email: z.string().email({ message: "Enter a valid email" }),
    email: z.string(),
    token: z.string(),
    password: z
      .string()
      .min(8, { message: "Enter a password of at least 8 characters" })
      .max(24, { message: "Password must not be more that 24 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
