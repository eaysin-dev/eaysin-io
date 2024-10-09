import Image from "next/image";

export interface UsageType {
  id: string;
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  codeSnippet?: string;
}

interface ProjectUsagesProps {
  usages: UsageType[];
}

const ProjectUsage = ({ usages }: ProjectUsagesProps) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Usage</h3>

      {usages.map((usage, index) => (
        <div key={usage?.id} className="mt-6 ml-2.5">
          <h3 className="text-sm font-medium">{`${index + 1}. ${
            usage.title
          }`}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {usage?.description}
          </p>

          {usage?.codeSnippet && (
            <pre className="px-4 rounded-md overflow-x-auto my-1">
              <code className="text-sm">{usage.codeSnippet}</code>
            </pre>
          )}
          {usage?.image && (
            <div className="flex items-center justify-center w-full">
              <Image
                src={usage.image || ""}
                alt={usage.alt || ""}
                height={400}
                width={500}
                className="my-4 w-full"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectUsage;
