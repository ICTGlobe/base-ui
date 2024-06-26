import LightDarkToggle from "@/components/LightDarkToggle";
import AppTitle from "./AppTitle";
import ProfileWidget from "./ProfileWidget";

import { APP_LOGO } from "../../config";
import logo from "../../public/CallVault-Black.png";
import { getSession } from "@/lib/actions";
import Image from "next/image";

const HeaderAuthenticated = async () => {
  const session = await getSession();

  return (
    <header className="hidden md:flex justify-between items-center bg-white dark:bg-zinc-700 drop-shadow-md px-4 py-2">
      {APP_LOGO ? (
        <div>
          <Image src={APP_LOGO} width={270} height={60} alt="App Logo" />
        </div>
      ) : (
        <AppTitle />
      )}
      <nav>Admin Nav</nav>
      <div className="flex">
        {session.name ? <ProfileWidget name={session.name} /> : null}
        <LightDarkToggle />
      </div>
    </header>
  );
};
export default HeaderAuthenticated;
