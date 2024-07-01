// import { redirect } from "next/navigation";
// import { getSession } from "@/lib/actions";

const DashboardPage = async () => {
  // const session = await getSession();

  // console.log("Dashboard session", session);

  // if (!session.isSignedIn) {
  //   redirect("/signin");
  // }

  return <h1 className="heading">The Dashboard</h1>;
};

export default DashboardPage;
