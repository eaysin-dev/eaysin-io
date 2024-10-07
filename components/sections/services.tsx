import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import SectionHeader from "../ui/section-header";
import { Typography } from "../ui/typography";

const Services = () => {
  return (
    <section id="services" className="s-services section-container relative">
      <div className="row s-services__content">
        <div className="vert-line"></div>

        <div className="">
          <SectionHeader
            title="Expertise"
            description="I focus on crafting scalable, user-centric web experiences."
            dataNum={"02"}
          />

          <Typography variant="large">
            I specialize in frontend development with a strong emphasis on
            performance, scalability, and clean code practices. My work spans
            across building user-friendly interfaces for complex systems, with
            expertise in React, TypeScript, and other modern technologies.
            Additionally, I have backend knowledge, which allows me to work
            seamlessly with APIs and server-side logic to deliver full-stack
            solutions when necessary.
          </Typography>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full column mt-16">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
                Frontend Development Expertise
              </AccordionTrigger>
              <AccordionContent>
                I have extensive experience in building responsive and scalable
                web applications using React, TypeScript, and modern JavaScript.
                My work includes projects like{" "}
                <Typography variant="inlineCode">Carepro</Typography> and
                <Typography variant="inlineCode">TUSO</Typography>, where I
                contributed to complex systems that manage healthcare and issue
                tracking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
                Backend Knowledge
              </AccordionTrigger>
              <AccordionContent>
                While my primary focus is frontend development, I have a solid
                understanding of backend technologies, allowing me to
                collaborate effectively with backend teams. I am proficient in
                working with APIs, authentication mechanisms, and ensuring
                smooth integration between frontend and backend systems.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
