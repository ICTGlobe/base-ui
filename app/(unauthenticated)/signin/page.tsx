import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import { TypographyH1 } from "@/components/ui/typography";
import SignInForm from "@/components/SignInForm";

const SignIn = async () => {
  const session = await getSession();

  if (session.isSignedIn) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <TypographyH1>Sign In</TypographyH1>
      <SignInForm />
    </main>
  );
};

export default SignIn;
