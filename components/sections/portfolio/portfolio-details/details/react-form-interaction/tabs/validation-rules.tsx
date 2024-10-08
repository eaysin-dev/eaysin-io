import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { validationFeatures } from "../data";

export const ValidationRulesSection = () => (
  <Card className="shadow-lg rounded-lg border border-gray-200">
    <CardHeader className="p-4">
      <CardTitle className="text-lg font-semibold">Validation Rules</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <Accordion type="multiple">
        {Object.entries(validationFeatures).map(([title, features], index) => (
          <AccordionItem
            key={index}
            value={title.toLowerCase().replace(/\s+/g, "-")}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="font-medium duration-200">
              {title}
            </AccordionTrigger>
            <AccordionContent className="pl-6 text-gray-600">
              <ul className="list-disc list-inside space-y-2">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  </Card>
);
