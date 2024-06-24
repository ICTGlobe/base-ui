import Footer from "@/components/Footer";
import HeaderAuthenticated from "@/components/HeaderAuthenticated";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderAuthenticated />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};
export default DashboardLayout;
