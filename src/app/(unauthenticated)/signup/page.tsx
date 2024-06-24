import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import FormSignUp from "@/components/FormSignUp";

const SignUp = async () => {
  const session = await getSession();

  if (session.isSignedIn) {
    redirect("/dashboard");
  }

  return <FormSignUp />;
};

export default SignUp;
