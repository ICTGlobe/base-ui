import Footer from "@/components/Footer";
import HeaderAuthenticated from "@/components/HeaderAuthenticated";
import Nav from "@/components/nav/Nav";
import NavMobile from "@/components/nav/NavMobile";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const session = await getSession();

  if (!session.isSignedIn) {
    redirect("/signin");
  }

  return (
    <>
      <NavMobile userName={session.name as string} />
      <HeaderAuthenticated />
      <main className="flex-grow flex">
        <aside className="hidden md:flex md:bg-muted px-4 py-6">
          <Nav userName={session.name as string} />
        </aside>
        <section className="py-6 px-4 flex-grow">{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default DashboardLayout;
