import LightDarkToggle from "@/components/LightDarkToggle";
import AppTitle from "./AppTitle";

const Header = () => {

  return (
    <header className="flex justify-between">
      <AppTitle />
      <nav>Nav stuff here</nav>
      <LightDarkToggle />
    </header>
  );
};
export default Header;
