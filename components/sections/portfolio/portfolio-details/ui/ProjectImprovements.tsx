// ProjectImprovements.tsx

export interface ProjectImprovementsType {
  improvements: string;
}

const ProjectImprovements = ({ improvements }: ProjectImprovementsType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Future Improvements</h3>
      <p className="text-sm text-muted-foreground">{improvements}</p>
    </section>
  );
};

export default ProjectImprovements;
