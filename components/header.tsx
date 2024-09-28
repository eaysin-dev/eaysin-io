"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/images/logo.svg";

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
      className={`s-header ${isSticky ? "sticky" : ""} ${
        isOffset ? "offset" : ""
      } ${isScrolling ? "scrolling" : ""}`}
    >
      <div className="header-logo">
        <Link href="/">
          {/* No need for an additional <a> tag here */}
          <Image src={logo} height={200} width={200} alt="Homepage" />
        </Link>
      </div>

      <div className="header-content">
        <nav className="row header-nav-wrap">
          <ul className="header-nav">
            <li>
              <a className="smoothscroll" href="#hero" title="Intro">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="About">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="Services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" title="Works">
                Works
              </a>
            </li>
            <li>
              <a href="mailto:#0" title="Contact us">
                Say Hello
              </a>
            </li>
          </ul>
        </nav>
        {/* end header-nav-wrap */}

        <a href="#0" className="btn btn--stroke btn--small">
          Download CV
        </a>
      </div>
      {/* end header-content */}

      <a className="header-menu-toggle" href="#0" onClick={handleMenuToggle}>
        <span>Menu</span>
      </a>

      {/* Add class to body when menu is open */}
      <style jsx global>{`
        body.menu-is-open {
          overflow: hidden;
        }
      `}</style>
    </header>
  );
};

export default Header;
