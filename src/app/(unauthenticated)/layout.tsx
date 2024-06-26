import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LightDarkToggle from "@/components/LightDarkToggle";

type Props = {
  children?: React.ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default LoggedOutLayout;
