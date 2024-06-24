import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import FormSignIn from "@/components/FormSignIn";

const SignIn = async () => {
  const session = await getSession();

  if (session.isSignedIn) {
    redirect("/dashboard");
  }

  return <FormSignIn />;
};

export default SignIn;
