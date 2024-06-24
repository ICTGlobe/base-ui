import Footer from "@/components/Footer";
import LightDarkToggle from "@/components/LightDarkToggle";

type Props = {
  children?: React.ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <LightDarkToggle />
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default LoggedOutLayout;
