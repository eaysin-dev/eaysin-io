// ProjectRole.tsx

import { Typography } from "@/components/ui/typography";

export interface Responsibility {
  id: string;
  label?: string;
  description?: string;
}

interface ProjectRoleType {
  role: string;
  responsibilities: Responsibility[];
}

const ProjectRole = ({ role, responsibilities }: ProjectRoleType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">My Role</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 ml-2.5">
        {responsibilities.map((resp, index) => (
          <li key={index}>
            <Typography variant="p" className="inline">
              {resp?.label} {resp?.label && ":"} {resp?.description}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectRole;
