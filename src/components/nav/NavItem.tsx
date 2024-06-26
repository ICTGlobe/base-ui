"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { StickyNoteIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

type NavItemProps = {
  icon?: React.ReactNode;
  label: string;
  href: string;
  isExpanded: boolean;
};

const NavItem = (item: NavItemProps) => {
  const { onClose } = useContext(DrawerContext);
  const pathName = usePathname();
  const isActive = pathName === item.href;

  return (
    <li>
      <Link
        className={cn(
          "block rounded-md p-2 text-muted-foreground hover:bg-white hover:text-foreground dark:hover:bg-zinc-700",
          isActive &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary",
        )}
        href={item.href}
        onClick={onClose}
      >
        <div className="flex items-center justify-start gap-2">
          <span title={item.label}>
            {item.icon ? item.icon : <StickyNoteIcon />}
          </span>
          <span className={item.isExpanded ? "inline-block" : "hidden"}>
            {item.label}
          </span>
        </div>
      </Link>
    </li>
  );
};
export default NavItem;
