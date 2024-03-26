"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavMenuItem } from "@/lib/navMenuItems";
import Link from "next/link";
import React from "react";

type Props = {
  menuItem: NavMenuItem;
};

export default function DesktopNavMenuItem({ menuItem }: Props) {
  if (!menuItem.subItems)
    return (
      <li>
        <Link href={menuItem.href} className=" font-medium">
          {menuItem.name}
        </Link>
      </li>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" font-medium">
        {menuItem.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-4 pb-2 pt-4 relative">
        <div className="absolute z-[60] h-3 border-b border-r border-slate-200 w-3 top-0 -mt-1.5 rotate-45 transform -translate-x-1/2 bg-white left-1/2" />
        {menuItem.subItems?.map((subItem, index) => (
          <React.Fragment key={subItem.href}>
            <Link href={subItem.href}>
              <DropdownMenuItem className="cursor-pointer">
                {subItem.name}
              </DropdownMenuItem>
            </Link>
            {menuItem.subItems && index < menuItem.subItems.length - 1 && (
              <DropdownMenuSeparator />
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
