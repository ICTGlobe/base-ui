import Footer from "@/components/Footer";
import HeaderAuthenticated from "@/components/HeaderAuthenticated";
import MenuMain from "@/components/MenuMain/MenuMain";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <HeaderAuthenticated />
      <main className="flex-grow flex">
        <aside>
          <MenuMain />
        </aside>
        <section className="py-2 px-4">{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default DashboardLayout;
