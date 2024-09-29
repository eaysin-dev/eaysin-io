"use client";

import { Fragment, useEffect, useState } from "react";
import { Button } from "./ui/button";
import GoTop from "./ui/go-top/goTop";
import { Typography } from "./ui/typography";

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
    <Fragment>
      <section className="section-container pb-10 pt-20">
        <div className="mb-16">
          <div className="column">
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
        </div>

        <div className="column flex items-center justify-center break-all">
          <Typography
            variant="inlineCode"
            className="text-[2rem] lg:text-[4rem] whitespace-pre-wrap text-center"
          >
            eaysin.arafat.j@gmail.com
          </Typography>
        </div>
      </section>

      <footer className="py-10 md:py-30 section-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="column md:col-span-1">
            <Typography variant="h4" className="uppercase tracking-wider pb-4">
              Where to Find Me
            </Typography>

            <div>
              <Typography variant="large">1600 Amphitheatre Parkway</Typography>
              <Typography variant="large">Mountain View, California</Typography>
              <Typography variant="large">94043 US</Typography>
              <Typography variant="large">+197 543 2345</Typography>
            </div>
          </div>

          <div className="column md:col-span-1">
            <Typography variant="h4" className="uppercase tracking-wider pb-4">
              Follow Us
            </Typography>

            <ul className="space-y-2">
              <li>
                <Typography variant="large">Facebook</Typography>
              </li>
              <li>
                <Typography variant="large">Twitter</Typography>
              </li>
              <li>
                <Typography variant="large">Instagram</Typography>
              </li>
              <li>
                <Typography variant="large">Dribbble</Typography>
              </li>
            </ul>
          </div>

          <div className="column md:col-span-2 lg:col-span-1">
            <Button className="py-6 w-full">Let's Talk</Button>
          </div>
        </div>

        <GoTop isVisible={isVisible} scrollToTop={scrollToTop} />
      </footer>
    </Fragment>
  );
};

export default Footer;
