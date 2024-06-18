import { TypographyH1 } from "@/components/ui/typography";
import SignUpForm from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <TypographyH1>Sign Up</TypographyH1>
      <SignUpForm />
    </main>
  );
};

export default SignUp;
