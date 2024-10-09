// ProjectResources.tsx

export interface ProjectResourcesType {
  title: string;
  links: { id: string; label: string; url: string }[];
}

const ProjectResources = ({ links, title }: ProjectResourcesType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 ml-2.5">
        {links.map((link) => (
          <li key={link?.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectResources;
