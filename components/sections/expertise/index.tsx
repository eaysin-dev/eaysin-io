import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import SectionHeader from "../../ui/section-header";
import Career from "./career";

// Define a type for the technologies categories
type Technologies = {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  testing: string[];
};

// Updated technology categories with the defined type
const technologies: Technologies = {
  languages: ["JavaScript", "TypeScript"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Material UI"],
  backend: ["Node.js", "Express.js", "GraphQL", "REST API"],
  databases: ["MongoDB", "PostgreSQL"],
  tools: ["Git", "Vite", "Webpack"],
  testing: ["Jest", "Vitest", "React Testing Library"],
};

const Expertise = () => {
  return (
    <section id="expertise" className="section-container relative">
      <div className="">
        <SectionHeader
          title="Expertise"
          description="Here's a look at my skills and professional journey."
          dataNum={"01"}
        />

        {/* Career Section */}
        <div className="mt-20">
          <Career />
        </div>

        {/* Title for Technologies Section */}
        <div className="mt-20">
          <Typography variant="h2" className="mb-6 text-2xl font-semibold">
            Key Technologies
          </Typography>
        </div>

        {/* Technologies Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.keys(technologies).map((category) => (
            <Card
              key={category}
              className="hover:shadow-lg transition-shadow rounded-md"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold capitalize">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies[category as keyof Technologies].map(
                    (tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Title for Accordion Section */}
        <div className="mt-20">
          <Typography variant="h2" className="mb-6 text-2xl font-semibold">
            Development Practices
          </Typography>
        </div>

        {/* Accordion Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted p-6 rounded-lg shadow-lg">
            <Typography variant="h2" className="mb-4">
              Development Process
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              My development process focuses on translating client goals into
              scalable, maintainable code, ensuring clean architecture and
              performance.
            </Typography>
          </div>

          <div className="bg-muted p-6 rounded-lg shadow-lg">
            <Typography variant="h2" className="mb-4">
              How do you stay up-to-date with the latest technologies?
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              I stay current by reading industry blogs, contributing to
              open-source projects, and engaging with the developer community
              through platforms like GitHub and Stack Overflow. I also regularly
              experiment with new technologies in personal projects and attend
              conferences, webinars, or watch tutorials on platforms like Udemy
              and YouTube.
            </Typography>
          </div>

          <div className="bg-muted p-6 rounded-lg shadow-lg">
            <Typography variant="h2" className="mb-4">
              Code Quality
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              I adhere to industry standards like SOLID principles and TDD
              (Test-Driven Development), ensuring high-quality, modular code.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
