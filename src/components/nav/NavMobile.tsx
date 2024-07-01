"use client";

import { useState } from "react";
import NavTitle from "./NavTitle";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerContext,
  DrawerTrigger,
} from "../ui/drawer";
import { CircleUserRoundIcon, LogOutIcon, MenuIcon } from "lucide-react";
import MenuMain from "./Nav";
import LightDarkToggle from "../LightDarkToggle";
import FormSignOut from "../FormSignOut";

const NavMobile = ({ userName }: { userName: string }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [mobileMenuOPen, setMobileMenuOpen] = useState(false);
  return (
    !isDesktop && (
      <div className="sticky left-0 top-0 flex justify-between border-b border-border bg-background p-4 md:hidden">
        <NavTitle />
        <Drawer
          direction="right"
          open={mobileMenuOPen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenChange={(open) => setMobileMenuOpen(open)}
        >
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="flex flex-col gap-8 p-4">
            <MenuMain userName={userName} />
            <div className="flex justify-between gap-2 md:hidden">
              <div className="flex items-center gap-2">
                <CircleUserRoundIcon />
                <p>{userName}</p>
              </div>
              <div className="flex gap-2">
                <LightDarkToggle />
                <FormSignOut>
                  <LogOutIcon />
                </FormSignOut>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    )
  );
};
export default NavMobile;
