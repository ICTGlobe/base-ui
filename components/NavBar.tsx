import SignOutForm from "./SignOutForm";
import { TypographyH1 } from "@/components/ui/typography";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full ">
      <TypographyH1>Base UI</TypographyH1>
      <SignOutForm />
    </nav>
  );
};

export default NavBar;
