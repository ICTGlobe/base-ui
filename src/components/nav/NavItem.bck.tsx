"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  isOpen?: boolean;
};

const NavItem = ({ children, href }: Props) => {
  const { onClose } = useContext(DrawerContext);
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li>
      <Link
        className={cn(
          "block rounded-md p-2 text-muted-foreground hover:bg-white hover:text-foreground dark:hover:bg-zinc-700",
          isActive &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary",
        )}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
