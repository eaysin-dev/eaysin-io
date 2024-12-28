import { Typography } from "@/components/ui/typography";
import Address from "./address";
import ContactDialog from "./contact-dialog";
import Social from "./social";

export const Footer = () => {
  return (
    <>
      <section id="contact" className="container pb-10 pt-24">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
            Let&apos;s &nbsp;
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Connect
            </span>
          </h2>
          <Typography variant="h1" className="mt-16">
            Looking to collaborate on an exciting project or need a dedicated
            developer for your team? Let’s work together to bring your vision to
            life. Get in touch at:
          </Typography>
        </div>
      </section>

      {/* <EmailDisplay /> */}

      <footer className="py-10 md:py-30 container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Address />

          <Social />

          <ContactDialog />
        </div>
      </footer>
    </>
  );
};
