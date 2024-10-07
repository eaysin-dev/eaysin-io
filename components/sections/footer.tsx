"use client";

import useContact from "@/hooks/useContact";
import { CheckIcon, ClipboardIcon, Loader2 } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import GoTop from "../ui/go-top/goTop";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Typography } from "../ui/typography";

const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false); // State to show feedback when copied
  const { formRef, inputError, onSubmit, isLoading } = useContact(() =>
    setIsDialogOpen(false)
  );

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

  // Function to copy email to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Fragment>
      <section className="section-container pb-10 pt-24">
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
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={() => copyToClipboard("eaysin.arafat.j@gmail.com")}
                className="cursor-pointer flex items-center space-x-2 relative my-7 "
              >
                <Typography
                  variant="inlineCode"
                  className="text-[2rem] lg:text-[4rem] whitespace-pre-wrap text-center py-3 px-5"
                >
                  eaysin.arafat.j@gmail.com
                </Typography>
                {isCopied ? (
                  <CheckIcon
                    className="text-green-600 absolute top-2 right-2"
                    size={15}
                  />
                ) : (
                  <ClipboardIcon
                    className="text-gray-500 absolute top-2 right-2"
                    size={14}
                  />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <Typography variant="small">
                {isCopied ? "Copied!" : "Click to copy"}
              </Typography>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <footer className="py-10 md:py-30 section-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="column md:col-span-1">
            <Typography variant="h4" className="uppercase tracking-wider pb-4">
              Where to Find Me
            </Typography>

            <div>
              <Typography variant="large">
                Real Crossing, College Road
              </Typography>
              <Typography variant="large">Mountain View, California</Typography>
              <Typography variant="large">Sadar, Mymensingh, BD</Typography>
              <Typography variant="large">+880 164 3226 078</Typography>
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

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="md:col-span-2 lg:col-span-1">
                <Button className="py-6 w-full">Let&apos;s Talk</Button>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Contact Me</DialogTitle>
                <DialogDescription className="mt-1">
                  I&apos;m excited to hear from you! Please fill out the form
                  below to send me a message.
                </DialogDescription>
              </DialogHeader>
              <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" />
                  {inputError?.name && (
                    <Typography variant="error">{inputError.name}</Typography>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" />
                  {inputError?.email && (
                    <Typography variant="error">{inputError.email}</Typography>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" />
                  {inputError?.message && (
                    <Typography variant="error">
                      {inputError.message}
                    </Typography>
                  )}
                </div>
                <DialogFooter className="pt-2">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <GoTop isVisible={isVisible} scrollToTop={scrollToTop} />
      </footer>
    </Fragment>
  );
};

export default Footer;
