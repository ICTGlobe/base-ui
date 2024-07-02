import Footer from "@/components/Footer";
import HeaderAuthenticated from "@/components/HeaderAuthenticated";
import Nav from "@/components/nav/Nav";
import NavMobile from "@/components/nav/NavMobile";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import { HAS_SIDE_NAV } from "../../../config";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const session = await getSession();

  if (!session.isSignedIn) {
    redirect("/signin");
  }

  return (
    <>
      <NavMobile userName={session.name as string} />
      <HeaderAuthenticated />
      <main className="mx-auto flex w-full max-w-screen-2xl flex-grow bg-white dark:bg-black">
        {HAS_SIDE_NAV ? (
          <aside className="hidden px-4 py-6 md:flex md:bg-muted">
            <Nav userName={session.name as string} />
          </aside>
        ) : null}
        <section className="flex-grow px-4 py-6">{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default DashboardLayout;
