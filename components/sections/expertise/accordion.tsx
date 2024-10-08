import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as ShadcnAccordion,
} from "@/components/ui/accordion";

const Accordion = () => {
  return (
    <ShadcnAccordion type="single" collapsible className="w-full mt-16">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
          What is your development process?
        </AccordionTrigger>
        <AccordionContent>
          My development process begins with understanding the project
          requirements and aligning with the client or team&apos;s goals. I then
          focus on creating a scalable, maintainable architecture, ensuring the
          codebase is clean and efficient. I emphasize user experience
          throughout, iterating on feedback, and follow industry best practices
          like code reviews, testing, and version control to ensure quality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
          How do you ensure code quality?
        </AccordionTrigger>
        <AccordionContent>
          I follow best practices like writing clean, modular code, conducting
          regular code reviews, and adhering to SOLID principles. I also
          implement automated testing (unit and integration tests) to catch
          issues early. Additionally, I use tools like ESLint and Prettier to
          maintain consistent formatting and style across the codebase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
          How do you handle tight deadlines?
        </AccordionTrigger>
        <AccordionContent>
          I prioritize tasks effectively by breaking down projects into smaller,
          manageable pieces, focusing on delivering core features first.
          Communication is key, so I make sure to set realistic expectations
          with the team or client and update them regularly on progress.
          I&apos;m experienced with agile methodologies, which helps me adapt
          quickly to shifting priorities.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
          How do you stay up-to-date with the latest technologies?
        </AccordionTrigger>
        <AccordionContent>
          I stay current by reading industry blogs, contributing to open-source
          projects, and engaging with the developer community through platforms
          like GitHub and Stack Overflow. I also regularly experiment with new
          technologies in personal projects and attend conferences, webinars, or
          watch tutorials on platforms like Udemy and YouTube.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold tracking-tight pb-2.5">
          What&apos;s your approach to debugging?
        </AccordionTrigger>
        <AccordionContent>
          My approach to debugging starts with thoroughly understanding the
          issue by reproducing it consistently. I utilize debugging tools in the
          browser (for frontend) or logs and debuggers (for backend) to trace
          the problem step-by-step. I also rely on testing, breaking the problem
          down, and reviewing code changes in version control to identify the
          root cause.
        </AccordionContent>
      </AccordionItem>
    </ShadcnAccordion>
  );
};

export default Accordion;
