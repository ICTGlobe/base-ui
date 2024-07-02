import LightDarkToggle from "@/components/LightDarkToggle";
import AppTitle from "./AppTitle";
import ProfileWidget from "./ProfileWidget";

import { APP_LOGO, APP_LOGO_LIGHT, APP_LOGO_DARK } from "../../config";
import { getSession } from "@/lib/actions";
import Image from "next/image";

const HeaderAuthenticated = async () => {
  const session = await getSession();

  return (
    <div className="hidden w-full bg-white drop-shadow-md dark:bg-zinc-700 md:flex">
      <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-2">
        {APP_LOGO_LIGHT && APP_LOGO_DARK ? (
          <>
            <Image
              src={APP_LOGO_LIGHT}
              className="block dark:hidden"
              width={270}
              height={60}
              alt="App Logo"
            />
            <Image
              src={APP_LOGO_DARK}
              className="hidden dark:block"
              width={270}
              height={60}
              alt="App Logo"
            />
          </>
        ) : APP_LOGO ? (
          <div>
            <Image src={APP_LOGO} width={270} height={60} alt="App Logo" />
          </div>
        ) : (
          <h1>
            <AppTitle />
          </h1>
        )}
        <nav>Admin Nav</nav>
        <div className="flex">
          {session.name ? <ProfileWidget name={session.name} /> : null}
          <LightDarkToggle />
        </div>
      </header>
    </div>
  );
};
export default HeaderAuthenticated;
