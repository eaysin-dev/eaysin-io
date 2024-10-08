"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenu as ShadcnNavigationMenu,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import * as React from "react";
import { navigationMenu } from "./menu";

interface NavigationMenuProps {
  onMenuItemClick: () => void;
}

export const NavigationMenu = ({ onMenuItemClick }: NavigationMenuProps) => {
  const [activeLink, setActiveLink] = React.useState<string>("");

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    event.preventDefault();
    setActiveLink(link);

    if (link === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (onMenuItemClick) onMenuItemClick();
    } else {
      const targetId = link.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        if (onMenuItemClick) onMenuItemClick();
      } else if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
        if (onMenuItemClick) onMenuItemClick();
      }
    }
  };

  return (
    <ShadcnNavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row items-start md:items-center gap-1">
        {navigationMenu?.map((navigation) => {
          return (
            <NavigationMenuItem key={navigation.id} className="cursor-pointer">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={(event) => handleScroll(event, navigation.link)}
                data-active={
                  activeLink === navigation.link && navigation.link !== "/"
                    ? "true"
                    : undefined
                }
              >
                {navigation.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </ShadcnNavigationMenu>
  );
};

// ListItem component remains unchanged
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
