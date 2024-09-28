"use client";

import { useEffect, useState } from "react";

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
      <section className="s-contact bg-black">
        <div className="row narrower s-contact__top h-text-center">
          <div className="column">
            <h3 className="h6">Get In Touch</h3>
            <h1 className="display-1">
              Have an idea or an epic project in mind? Talk to us. Let us work
              together and make something great. Shoot us a message at
            </h1>
          </div>
        </div>

        <div className="row h-text-center">
          <div className="column">
            <p className="s-contact__email">
              <a href="mailto:#0" className="break-words">
                eaysin.arafat.j@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="s-footer bg-black">
        <div className="row row-y-top">
          <div className="column large-8 medium-12">
            <div className="row">
              <div className="column large-7 tab-12 s-footer__block">
                <h4 className="h6">Where to Find Us</h4>

                <p>
                  1600 Amphitheatre Parkway <br />
                  Mountain View, California <br />
                  94043 US <br />
                  <a href="tel:197-543-2345">+197 543 2345</a>
                </p>
              </div>

              <div className="column large-5 tab-12 s-footer__block">
                <h4 className="h6">Follow Us</h4>

                <ul className="s-footer__list">
                  <li>
                    <a href="#0">Facebook</a>
                  </li>
                  <li>
                    <a href="#0">Twitter</a>
                  </li>
                  <li>
                    <a href="#0">Instagram</a>
                  </li>
                  <li>
                    <a href="#0">Dribbble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="column large-4 medium-12 s-footer__block--end">
            <a href="mailto:#0" className="btn h-full-width ">
              Let's Talk
            </a>
          </div>

          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              top
            </a>
          </div>
        </div>
        <div className={`ss-go-top ${isVisible ? "link-is-visible" : ""}`}>
          <a
            className="smoothscroll"
            title="Back to Top"
            href="#top"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
