import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import SectionHeader from "./ui/section-header";
import { Typography } from "./ui/typography";

const Services = () => {
  return (
    <section
      id="services"
      className="s-services section-container relative"
    >
      <div className="row s-services__content">
        <div className="vert-line"></div>

        <div className="">
          <SectionHeader
            title="Expertise"
            description="I focus on crafting web experiences and designs that works."
            dataNum={"02"}
          />

          <Typography variant="large">
            Suspendisse eu ligula. Duis arcu tortor, suscipit eget, imperdiet
            nec, imperdiet iaculis, ipsum. Nulla facilisi. Etiam rhoncus.
            Praesent blandit laoreet nibh. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Cras sagittis. Praesent egestas
            tristique nibh.
          </Typography>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full column mt-16">
            <AccordionItem value="item-1">
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight pb-1">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight pb-1">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight pb-1">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
