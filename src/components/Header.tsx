import LightDarkToggle from "@/components/LightDarkToggle";
import AppTitle from "./AppTitle";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-end">
      <LightDarkToggle />
    </header>
  );
};
export default Header;
