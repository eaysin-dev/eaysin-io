"use client";

import { useEffect, useState } from "react";
import GoTop from "../../ui/go-top/goTop";
import { Typography } from "../../ui/typography";
import Address from "./address";
import ContactDialog from "./contact-dialog";
import EmailDisplay from "./email-display";
import Social from "./social";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Back to top scroll functionality
  const toggleVisibility = () => {
    if (window.scrollY >= 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <section className="section-container pb-10 pt-24" id="contact">
        <div className="mb-16">
          <Typography
            variant="h3"
            className="uppercase tracking-wider text-center"
          >
            Get In Touch
          </Typography>
          <Typography variant="h1" className="mt-16">
            Have an idea or an epic project in mind? Talk to us. Let us work
            together and make something great. Shoot us a message at
          </Typography>
        </div>

        <EmailDisplay />
      </section>

      <footer className="py-10 md:py-30 section-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Address />

          <Social />

          <ContactDialog />
        </div>

        <GoTop isVisible={isVisible} scrollToTop={scrollToTop} />
      </footer>
    </>
  );
};

export default Footer;
