import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express.js", "REST API"],
  databases: ["MongoDB"],
  tools: ["Git", "Vite", "Webpack"],
  testing: ["Jest", "Vitest", "React Testing Library"],
};

export const Skills = () => {
  return (
    <section id="skills" className="container pt-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-8 text-center">
        Technologies I Use:
      </h2>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5">
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

      <p className="mt-12 text-center text-sm lg:text-base font-medium p-4 rounded-lg shadow-md bg-card text-card-foreground">
        I have a strong understanding of core languages like JavaScript and
        TypeScript, allowing me to pick up and excel with any framework or
        library in a short time. My approach focuses on depth and mastering the
        underlying principles, enabling me to deliver high-quality solutions no
        matter the technology stack.
      </p>
    </section>
  );
};
