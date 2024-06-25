import { redirect } from "next/navigation";
import { getSession } from "@/lib/actions";
// import { sessionForClient } from "@/lib/actions";
import { TypographyH2 } from "@/components/ui/typography";
import { convertToClientSession } from "@/lib/sessionClient";

const DashboardPage = async () => {
  const session = await getSession();
  // const session = await convertToClientSession();

  console.log("Dashboard session", session);

  if (!session.isSignedIn) {
    redirect("/signin");
  }
  // return <TypographyH2>Welcome to the Dashboard {session.name}!</TypographyH2>;
  return <TypographyH2>Welcome to the Dashboard!</TypographyH2>;
};

export default DashboardPage;
