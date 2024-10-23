
import ProjectOverview from "@/components/ui/project-details/overview";
import { fileDriveDocs } from "./data";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectScreenshots from "@/components/ui/project-details/screenshots";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectResources from "@/components/ui/project-details/resources";

const FileDrive = () => {
  return (
    <div className="">
      <ProjectOverview
        title={fileDriveDocs.title}
        duration={fileDriveDocs.clientInformation?.date || ""}
        organization={fileDriveDocs.organization}
        tagline={fileDriveDocs.tagline}
        overview={fileDriveDocs.overview}
      />
      <ProjectKeyFeatures features={fileDriveDocs.keyFeatures} />
      <ProjectTechStack techStack={fileDriveDocs.techStack} />
      <ProjectChallenges challenges={fileDriveDocs.challenges} />
      <ProjectScreenshots screenshots={fileDriveDocs.images || []} />
      <ProjectRole
        role={fileDriveDocs.role || ""}
        responsibilities={fileDriveDocs.responsibilities}
      />
      <ProjectLessons lessons={fileDriveDocs.lessons || ""} />
      <ProjectImprovements improvements={fileDriveDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={fileDriveDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={fileDriveDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default FileDrive;
