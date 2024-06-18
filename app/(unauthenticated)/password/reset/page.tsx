import PasswordResetForm from "@/components/PasswordResetForm";
import { TypographyH1 } from "@/components/ui/typography";

const ResetPassword = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <TypographyH1>Reset Password</TypographyH1>
      <PasswordResetForm />
    </main>
  );
};

export default ResetPassword;
