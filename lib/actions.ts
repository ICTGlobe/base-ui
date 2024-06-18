"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData, defaultSession } from "@/lib/session";
import { AUTH_SIGNUP, AUTH_SIGNIN, AUTH_FORGOT, AUTH_RESET } from "@/config";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isSignedIn) {
    session.isSignedIn = defaultSession.isSignedIn;
  }

  return session;
};

export const signUp = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  try {
    console.log("signUp formData", formData);

    console.log("name", formData.get("name") as string);
    console.log("email", formData.get("email") as string);
    console.log("password", formData.get("password") as string);

    const response = await fetch(AUTH_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      }),
    });

    console.log("response", response);

    if (response.ok) {
      console.log("response", JSON.stringify(response));

      const replace = true;

      // redirect("/signin", RedirectType.replace);
      return { success: "User has been signed up" };
    } else {
      return { error: "Unable to sign up new user" };
    }
  } catch (error) {}
};

export const signIn = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  try {
    console.log("signIn formData", formData);

    const response = await fetch(AUTH_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      }),
    });

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
      // redirect("/dashboard");
    } else {
      return { error: "Invalid username or password" };
    }
  } catch (error) {}
};

export const signOut = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const passwordForgot = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  try {
    const response = await fetch(AUTH_FORGOT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email") as string,
      }),
    });
    if (response.ok) {
      return { success: "Password reset link sent to email" };
    } else {
      return { error: "Invalid username or password" };
    }
  } catch (error) {}
};

export const passwordReset = async (
  prevState: { error: undefined | string },
  formData: FormData,
) => {
  try {
    const response = await fetch(AUTH_RESET, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        token: formData.get("token") as string,
      }),
    });
    if (response.ok) {
      return { success: "Password has been reset" };
    } else {
      return { error: "Unable to reset password" };
    }
  } catch (error) {}
};
