import { redirect } from "next/navigation";
import { getSession } from "@/lib/actions";
import { TypographyH2 } from "@/components/ui/typography";

const DashboardPage = async () => {
  const session = await getSession();

  console.log("Dashboard session", session);

  if (!session.isSignedIn) {
    redirect("/signin");
  }
  return <TypographyH2>Welcome to the Dashboard {session.name}!</TypographyH2>;
};

export default DashboardPage;