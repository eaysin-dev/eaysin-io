import Icon from "@/public/icons/Icon";
import { uuid } from "@/utils/shortid";

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
    title: "About",
    link: "#about",
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
    title: "Blogs",
    link: "https://eaysin-arafat.hashnode.dev/",
  },
];
