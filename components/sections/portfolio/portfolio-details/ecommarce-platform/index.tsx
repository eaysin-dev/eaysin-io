import ProjectInstallation from "@/components/ui/project-details/installation";
import ProjectChallenges from "../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../ui/project-details/improvements";
import ProjectKeyFeatures from "../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../ui/project-details/overview";
import ProjectResources from "../../../../ui/project-details/resources";
import ProjectRole from "../../../../ui/project-details/role";
import ProjectScreenshots from "../../../../ui/project-details/screenshots";
import ProjectTechStack from "../../../../ui/project-details/tech-stack";
import { ecommarceDocs } from "./data";

const EcommarcePlatform = () => {
  return (
    <div className="">
      <ProjectOverview
        title={ecommarceDocs.title}
        duration={ecommarceDocs.clientInformation?.date || ""}
        organization={ecommarceDocs.organization}
        tagline={ecommarceDocs.tagline}
        overview={ecommarceDocs.overview}
      />
      <ProjectKeyFeatures features={ecommarceDocs.keyFeatures} />
      <ProjectTechStack techStack={ecommarceDocs.techStack} />
      <ProjectInstallation
        installationSteps={ecommarceDocs?.installationStep || []}
      />
      <ProjectChallenges challenges={ecommarceDocs.challenges} />
      <ProjectScreenshots
        screenshots={ecommarceDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={ecommarceDocs.role || ""}
        responsibilities={ecommarceDocs.responsibilities}
      />
      <ProjectLessons lessons={ecommarceDocs.lessons || ""} />
      <ProjectImprovements improvements={ecommarceDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={ecommarceDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={ecommarceDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default EcommarcePlatform;
