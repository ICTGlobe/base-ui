"use client";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { TypographyH4, TypographyH5, TypographyH6 } from "./ui/typography";
import FormSignOut from "./FormSignOut";

type ProfileWidgetProps = {
  name: string | undefined;
};

const ProfileWidget = ({ name }: ProfileWidgetProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <CircleUserRound />
          <TypographyH6>{name}</TypographyH6>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <FormSignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileWidget;