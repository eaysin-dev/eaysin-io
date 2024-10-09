import ProjectChallenges from "../../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../../ui/project-details/improvements";
import ProjectKeyFeatures from "../../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../../ui/project-details/overview";
import ProjectResources from "../../../../../ui/project-details/resources";
import ProjectRole from "../../../../../ui/project-details/role";
import ProjectScreenshots from "../../../../../ui/project-details/screenshots";
import ProjectTechStack from "../../../../../ui/project-details/tech-stack";
import { fileDriveDocs } from "./data";

const FileDrive = () => {
  return (
    <div className="">
      <ProjectOverview
        title={fileDriveDocs.title}
        duration={fileDriveDocs.duration}
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
