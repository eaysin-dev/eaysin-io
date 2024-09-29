"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "./header-menu";
import { SheetDemo } from "./sheet";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffset, setIsOffset] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Mobile Menu Toggle
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Scroll event to manage sticky header, offset, and scrolling states
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector(".s-hero");
      if (!heroElement) return;

      const triggerHeight = heroElement.clientHeight - 170;
      const scrollPos = window.scrollY;

      setIsSticky(scrollPos > triggerHeight);
      setIsOffset(scrollPos > triggerHeight + 20);
      setIsScrolling(scrollPos > triggerHeight + 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth Scroll
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll(".smoothscroll");

    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header
      className={`s-header  ${isSticky ? "sticky" : ""} ${
        isOffset ? "offset" : ""
      } ${isScrolling ? "scrolling" : ""}`}
    >
      <div className="hidden md:block">
        <HeaderMenu />
      </div>

      <div className="md:hidden">
        <SheetDemo />
      </div>
    </header>
  );
};

export default Header;
