"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { uuid } from "@/utils/shortid";
import { SiThreedotjs } from "react-icons/si";

const navigationMenu: {
  id: string;
  title: React.ReactNode;
  link: string;
}[] = [
  {
    id: uuid(),
    title: <SiThreedotjs size={22} />,
    link: "/docs/primitives/alert-dialog",
  },
  {
    id: uuid(),
    title: "About",
    link: "/docs/primitives/alert-dialog",
  },
  {
    id: uuid(),
    title: "Expertise",
    link: "/docs/primitives/alert-dialog",
  },
  {
    id: uuid(),
    title: "Recent Works",
    link: "/docs/primitives/alert-dialog",
  },
  {
    id: uuid(),
    title: "Contact",
    link: "/docs/primitives/alert-dialog",
  },
  {
    id: uuid(),
    title: "Blogs",
    link: "/docs/primitives/alert-dialog",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row items-start md:items-center gap-1">
        {navigationMenu?.map((navigation) => (
          <NavigationMenuItem key={navigation.id}>
            <Link href={navigation?.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {navigation?.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
