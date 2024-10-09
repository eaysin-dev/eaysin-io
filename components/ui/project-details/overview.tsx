// ProjectOverview.tsx

export interface ProjectOverviewType {
  title: string;
  duration: string;
  organization: string;
  tagline: string;
  overview: string;
}

const ProjectOverview = ({
  title,
  duration,
  organization,
  overview,
}: ProjectOverviewType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground ml-2.5">
        <strong>Duration:</strong> {duration} <br />
        <strong>Organization:</strong> {organization}
      </p>
      {/* <h4 className="mt-2 text-base">Tagline</h4>
      <p className="text-sm text-muted-foreground">{tagline}</p> */}
      <p className="text-sm text-muted-foreground mt-2">
        <strong>Overview</strong>
      </p>

      <p className="text-sm text-muted-foreground ml-2.5">{overview}</p>
    </section>
  );
};

export default ProjectOverview;
