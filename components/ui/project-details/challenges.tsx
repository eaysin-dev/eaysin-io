//
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

export interface ChallengeType {
  label: string;
  link?: string;
  solutions: {
    id: string;
    text: string;
    codeSnippet?: string;
    link?: string;
  }[];
}

interface ProjectChallengesProps {
  challenges: ChallengeType[];
}

const ProjectChallenges = ({ challenges }: ProjectChallengesProps) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
      <Accordion type="multiple" className="ml-2.5">
        {challenges.map((challenge, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="pb-1.5">
              {challenge?.label}
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-1 mt-2.5">
                <ul className="list-disc list-inside mt-2">
                  {challenge.solutions.map((solution, idx) => (
                    <li key={idx} className="mb-2">
                      <p className="font-medium inline text-muted-foreground">
                        {solution.text}
                      </p>
                      {solution.codeSnippet && (
                        <Typography
                          variant="inlineCode"
                          className="p-2 mt-1 rounded block"
                        >
                          <code>{solution.codeSnippet}</code>
                        </Typography>
                      )}
                      {solution.link && (
                        <a
                          href={solution.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Read more
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                {challenge.link && (
                  <a
                    href={challenge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more about this challenge
                  </a>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectChallenges;
