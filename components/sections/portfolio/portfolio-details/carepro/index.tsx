import ProjectChallenges from "../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../ui/project-details/improvements";
import ProjectKeyFeatures from "../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../ui/project-details/overview";
import ProjectResources from "../../../../ui/project-details/resources";
import ProjectRole from "../../../../ui/project-details/role";
import ProjectScreenshots from "../../../../ui/project-details/screenshots";
import ProjectTechStack from "../../../../ui/project-details/tech-stack";
import { careproDocs } from "./data";

const Carepro = () => {
  return (
    <div className="">
      <ProjectOverview
        title={careproDocs.title}
        duration={careproDocs.duration}
        organization={careproDocs.organization}
        tagline={careproDocs.tagline}
        overview={careproDocs.overview}
      />
      <ProjectKeyFeatures features={careproDocs.keyFeatures} />
      <ProjectTechStack techStack={careproDocs.techStack} />
      <ProjectChallenges challenges={careproDocs.challenges} />
      <ProjectScreenshots
        screenshots={careproDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={careproDocs.role || ""}
        responsibilities={careproDocs.responsibilities}
      />
      <ProjectLessons lessons={careproDocs.lessons || ""} />
      <ProjectImprovements improvements={careproDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={careproDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={careproDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default Carepro;
