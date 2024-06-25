import LightDarkToggle from "@/components/LightDarkToggle";
import AppTitle from "./AppTitle";
import ProfileWidget from "./ProfileWidget";

import { getSession } from "@/lib/actions";

const HeaderAuthenticated = async () => {
  const session = await getSession();

  return (
    <header className="hidden md:flex justify-between bg-white drop-shadow-md">
      <AppTitle />
      <nav>Nav stuff here</nav>
      <div>
        {session.name ? <ProfileWidget name={session.name} /> : null}
        <LightDarkToggle />
      </div>
    </header>
  );
};
export default HeaderAuthenticated;
