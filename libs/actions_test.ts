"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getIronSession } from "iron-session";
import { ZodError } from "zod";
import { sessionOptions, SessionData, defaultSession } from "@/libs/lib";
import { SignInSchema } from "@/libs/zod";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isSignedIn) {
    session.isSignedIn = defaultSession.isSignedIn;
  }

  return session;
};

export const signIn = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  try {
    console.log("formData", formData);
    const { email, password } = await SignInSchema.parseAsync({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    // console.log("email", email);
    // console.log("password", password);

    const response = await fetch(
      "https://api.callvault.co.za/api/v1/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    );

    if (response.ok) {
      const user = await response.json();
      // console.log("user", user);
      const session = await getSession();

      session.id = user.id;
      session.name = user.name;
      session.email = user.email;
      session.token = user.token;
      session.isSignedIn = true;

      await session.save();
      redirect("/dashboard");
    } else {
      return { error: "Invalid username or password" };
    }
  } catch (error) {
    if (error instanceof ZodError) {
      // console.error("ZodError", error.errors);

      const errors = error.errors;
      let errorMessages: { [key: string]: string } = {};
      errors.forEach((error) => {
        const field = error.path[0];
        errorMessages[field] = error.message;
      });
      return errorMessages;
    }
  }
};

export const signOut = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
