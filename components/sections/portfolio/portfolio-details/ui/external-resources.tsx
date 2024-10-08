import { ExternalResource } from "@/app/data/portfolio";

interface ExternalResourcesProps {
  resources?: ExternalResource[];
}

const ExternalResources = ({ resources }: ExternalResourcesProps) => (
  <>
    {resources && resources.length > 0 && (
      <>
        <h4 className="text-sm font-semibold text-muted-foreground mt-8">
          External Resources
        </h4>
        <ul className="mt-2 flex flex-wrap items-center gap-2">
          {resources.map((resource) => (
            <li key={resource.id}>
              <a
                href={resource.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline capitalize"
              >
                {resource.label || "View Resource"}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  </>
);

export default ExternalResources;
