// ProjectResources.tsx

export interface ProjectResourcesType {
  title: string;
  data: { name: string; link: string }[];
}

const ProjectResources = ({ data, title }: ProjectResourcesType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
        {data.map((resource, index) => (
          <li key={index}>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectResources;
