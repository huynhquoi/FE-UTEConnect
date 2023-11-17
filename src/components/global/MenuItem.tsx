"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import "./styles.scss";

type MenuItemProps = {
  menuLabel: string;
  menuChild?: Array<MenuItemChild>;
};

type MenuItemChild = {
  menuLabel: string;
  href: string;
};

const MenuItem = ({
  menuLabel,
  menuChild,
  className,
  ...props
}: MenuItemProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn("", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="menu-item_label">
            {menuLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-[5px]" align="start" forceMount>
          <DropdownMenuGroup>
            {menuChild?.map((i) => (
              <DropdownMenuItem key={i.menuLabel}>
                <Link href={i.href}>{i.menuLabel}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuItem;
