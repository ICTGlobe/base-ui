import FormSignOut from "./FormSignOut";
import { TypographyH1 } from "@/components/ui/typography";

const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <TypographyH1>Base UI</TypographyH1>
      <FormSignOut />
    </nav>
  );
};

export default NavBar;
