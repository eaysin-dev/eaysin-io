import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { validationFeatures } from "../data";

export const ValidationRulesSection = () => (
  <>
    <h2 className="text-xl font-semibold mb-2">Validation Rules</h2>

    <Accordion type="multiple">
      {Object.entries(validationFeatures).map(([title, features], index) => (
        <AccordionItem
          key={index}
          value={title.toLowerCase().replace(/\s+/g, "-")}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="pl-2">
            <ul className="list-disc list-inside space-y-2">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </>
);
