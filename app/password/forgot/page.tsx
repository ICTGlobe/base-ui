import PasswordForgotForm from "@/components/PasswordForgotForm";
import { TypographyH1 } from "@/components/ui/typography";

const Password = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <TypographyH1>Forgot Your Password?</TypographyH1>
      <PasswordForgotForm />
    </main>
  );
};

export default Password;
