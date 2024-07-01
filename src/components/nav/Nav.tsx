"use client";

import { useState } from "react";
import ProfileWidget from "../ProfileWidget";
import { NavTestData } from "@/test_data/navTestData";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowLeftToLineIcon, ArrowRightFromLineIcon } from "lucide-react";
import NavItem from "./NavItem";

const navData = NavTestData;

const MenuMain = (
  { userName }: { userName: string },
  { className }: { className?: string },
) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav className={cn(`min-h-fit ${isExpanded ? "w-[200px]" : "w-auto"}`)}>
      <Button
        size={"icon"}
        variant={"ghost"}
        onClick={() => setIsExpanded(!isExpanded)}
        className="hidden text-muted-foreground hover:bg-white hover:text-foreground dark:text-muted-foreground dark:hover:bg-zinc-700 md:flex md:items-center md:justify-center"
        title="Toggle Menu"
      >
        {isExpanded ? <ArrowLeftToLineIcon /> : <ArrowRightFromLineIcon />}
      </Button>
      <ul>
        {navData.map((item) => (
          <NavItem key={item.href} {...item} isExpanded={isExpanded} />
        ))}
      </ul>
    </nav>
  );
};
export default MenuMain;
