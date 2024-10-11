"use client";

import Icon from "@/public/icons/Icon";
import { HeaderSheet } from "./header-sheet";
import Navigation from "./navigation";
import useHeader from "./useHeader";

const Header: React.FC = () => {
  const { handleHomeClick, isOffset, isScrolling, isSticky } = useHeader();

  console.log({ isScrolling, isSticky, isOffset });

  return (
    <header
      className={`s-header !bg-background flex items-center justify-center z-50 ${
        isSticky
          ? "sticky"
          : "bg-gradient-to-r from-[hsl(var(--muted))] via-[hsl(var(--background))] to-[hsl(var(--muted))]"
      } ${isOffset ? "offset" : ""} ${isScrolling ? "scrolling" : ""}`}
    >
      <div className="hidden md:block w-full">
        <Navigation onMenuItemClick={() => {}} />
      </div>

      {/* mobile view navigation menu */}
      <div className="md:hidden flex items-center justify-between w-full px-10">
        <a href="/" onClick={handleHomeClick} className="">
          <Icon />
        </a>
        <HeaderSheet />
      </div>
    </header>
  );
};

export default Header;
