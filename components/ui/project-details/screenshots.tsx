import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface Screenshot {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
  isCompanyProject?: boolean;
  liveLink?: string;
}

const ProjectScreenshots = ({
  screenshots,
  isCompanyProject = false,
  liveLink,
}: ProjectScreenshotsProps) => {
  const hasScreenshots = screenshots.length > 0;

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Project Screenshots</h3>

      {isCompanyProject && hasScreenshots && (
        <p className="text-sm text-muted-foreground mt-2 ml-2.5">
          This project is confidential and not available for public access.
          Below are some screenshots showcasing its features and design for
          internal review:
        </p>
      )}

      {!isCompanyProject && liveLink && (
        <div className="mt-4 ml-2.5">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Visit Live Project
            <FaExternalLinkAlt className="ml-2" size={14} />
          </a>
        </div>
      )}

      {/* Render screenshots or fallback message */}
      {hasScreenshots ? (
        <div className="grid md:grid-cols-2 place-items-center gap-4 mt-4 ml-2.5">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot?.id}
              className="border rounded overflow-hidden h-full"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-auto object-cover"
                width={600}
                height={300}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 ml-2.5 text-sm text-muted-foreground">
          {isCompanyProject
            ? "This project is confidential, and no screenshots are available for public display."
            : "No screenshots or live link available at this time. Please check back later."}
        </p>
      )}
    </section>
  );
};

export default ProjectScreenshots;
