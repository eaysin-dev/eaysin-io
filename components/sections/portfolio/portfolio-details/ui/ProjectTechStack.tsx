// ProjectTechStack.tsx
import { Badge } from "@/components/ui/badge";

interface ProjectTechStackType {
  techStack: string[];
}

const ProjectTechStack = ({ techStack }: ProjectTechStackType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Tech Stack</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
    </section>
  );
};

export default ProjectTechStack;
