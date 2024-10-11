import Icon from "@/public/icons/Icon";
import { uuid } from "@/utils/shortid";
import { ExternalLinkIcon } from "lucide-react";

interface NavigationMenu {
  id: string;
  title: React.ReactNode;
  link: string;
}

export const navigationMenu: NavigationMenu[] = [
  {
    id: uuid(),
    title: <Icon />,
    link: "/",
  },
  {
    id: uuid(),
    title: "Expertise",
    link: "#expertise",
  },
  {
    id: uuid(),
    title: "Recent Works",
    link: "#recent-works",
  },
  {
    id: uuid(),
    title: "Contact",
    link: "#contact",
  },
  {
    id: uuid(),
    title: (
      <>
        Blogs <ExternalLinkIcon className="h-4 w-4 ml-1.5" />
      </>
    ),
    link: "https://eaysin-arafat.hashnode.dev/",
  },
];
