import Footer from "@/components/Footer";
import HeaderAuthenticated from "@/components/HeaderAuthenticated";
import MenuMain from "@/components/Menu/MenuMain";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import MenuMobile from "@/components/Menu/MenuMobile";
import { getSession } from "@/lib/actions";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const session = await getSession();
  return (
    <>
      <MenuMobile userName={session.name as string} />
      <HeaderAuthenticated />
      <main className="flex-grow flex">
        <aside className="hidden md:flex md:bg-muted px-4 p-6">
          <MenuMain userName={session.name as string} />
        </aside>
        <section className="py-2 px-4">{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default DashboardLayout;
