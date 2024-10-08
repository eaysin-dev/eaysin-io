import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface Screenshot {
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
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Project Screenshots</h3>

      {/* Conditionally render the message if it's a company project */}
      {isCompanyProject && (
        <p className="text-sm text-muted-foreground mt-2">
          Due to the nature of the project (government-sponsored), there is no
          public demo available. Below are some screenshots from the
          application:
        </p>
      )}

      {/* Conditionally render the live link button if it's a personal project and has a live link */}
      {!isCompanyProject && liveLink && (
        <div className="mt-4">
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

      {/* Render screenshots */}
      <div className="grid md:grid-cols-2 place-items-center gap-4 mt-4">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="border rounded overflow-hidden h-full">
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
    </section>
  );
};

export default ProjectScreenshots;
