//
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

export interface ChallengeType {
  description: string;
  solutions: {
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
      <Accordion type="multiple">
        {challenges.map((challenge, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="pb-1.5">
              Challenge {index + 1}
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-1 mt-2.5">
                <p className="text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {challenge.solutions.map((solution, idx) => (
                    <li key={idx} className="mb-2">
                      <p className="font-semibold inline">{solution.text}</p>
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
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectChallenges;
