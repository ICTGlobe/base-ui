"use client";

import { useState } from "react";
import MenuTitle from "./MenuTitle";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerContext,
  DrawerTrigger,
} from "../ui/drawer";
import { CircleUserRoundIcon, LogOutIcon, MenuIcon } from "lucide-react";
import MenuMain from "./MenuMain";
import ProfileWidget from "../ProfileWidget";
import {
  TypographyH4,
  TypographyH5,
  TypographyH6,
} from "@/components/ui/typography";
import LightDarkToggle from "../LightDarkToggle";
import FormSignOut from "../FormSignOut";

const MenuMobile = ({ userName }: { userName: string }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [mobileMenuOPen, setMobileMenuOpen] = useState(false);
  return (
    !isDesktop && (
      <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
        <MenuTitle />
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
              <div className="flex gap-2 items-center">
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
export default MenuMobile;
