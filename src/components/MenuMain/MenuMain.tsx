"use client";

import MenuItem from "./MenuMainItem";
import { TestData } from "./testData";
import { cn } from "@/lib/utils";

const MenuMain = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(`md:bg-zinc-50 overflow-auto p-4 min-h-screen`, className)}
    >
      <ul className="">
        {TestData.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.children}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};
export default MenuMain;
