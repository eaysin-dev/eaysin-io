// ProjectLessons.tsx

export interface ProjectLessonsType {
  lessons: string;
}

const ProjectLessons = ({ lessons }: ProjectLessonsType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Lessons Learned</h3>
      <p className="text-sm text-muted-foreground">{lessons}</p>
    </section>
  );
};

export default ProjectLessons;
