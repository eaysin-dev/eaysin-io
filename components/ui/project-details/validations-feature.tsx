import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

// Correct the ValidationRule interface to match an object structure
export interface ValidationRule {
  [category: string]: string[];
}

interface ValidationsFeatureProps {
  validationRules: ValidationRule; // Object, not array
}

const ProjectValidationsFeature = ({
  validationRules,
}: ValidationsFeatureProps) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Validation Features</h3>

      <Accordion type="multiple" className="ml-2.5">
        {Object.entries(validationRules).map(([category, rules], index) => (
          <AccordionItem
            key={index}
            value={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <AccordionTrigger className="pb-1.5">{category}</AccordionTrigger>
            <AccordionContent className="pl-2">
              <ul className="list-disc list-inside space-y-2">
                {rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex}>
                    <Typography
                      variant="p"
                      className="pl-1 mt-2.5 text-muted-foreground inline"
                    >
                      {rule}
                    </Typography>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectValidationsFeature;
