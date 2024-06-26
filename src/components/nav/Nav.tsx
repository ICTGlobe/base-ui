"use client";

import ProfileWidget from "../ProfileWidget";
import MenuItem from "./NavItem";
import { NavTestData } from "@/test_data/navTestData";
import { cn } from "@/lib/utils";

const navData = NavTestData;

const MenuMain = (
  { userName }: { userName: string },
  { className }: { className?: string }
) => {
  return (
    <nav className={cn(` overflow-auto min-h-fit min-w-[200px]`, className)}>
      <ul className="">
        {navData.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.children}
          </MenuItem>
        ))}
      </ul>
      {/* <ProfileWidget name={userName} /> */}
    </nav>
  );
};
export default MenuMain;
