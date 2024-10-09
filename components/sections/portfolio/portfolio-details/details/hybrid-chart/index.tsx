import ProjectChallenges from "../../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../../ui/project-details/improvements";
import ProjectKeyFeatures from "../../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../../ui/project-details/overview";
import ProjectResources from "../../../../../ui/project-details/resources";
import ProjectRole from "../../../../../ui/project-details/role";
import ProjectScreenshots from "../../../../../ui/project-details/screenshots";
import ProjectTechStack from "../../../../../ui/project-details/tech-stack";
import { hybridChartDocs } from "./data";

const HybridChart = () => {
  return (
    <div className="">
      <ProjectOverview
        title={hybridChartDocs.title}
        duration={hybridChartDocs.duration}
        organization={hybridChartDocs.organization}
        tagline={hybridChartDocs.tagline}
        overview={hybridChartDocs.overview}
      />
      <ProjectKeyFeatures features={hybridChartDocs.keyFeatures} />
      <ProjectTechStack techStack={hybridChartDocs.techStack} />
      <ProjectChallenges challenges={hybridChartDocs.challenges} />
      <ProjectScreenshots
        screenshots={hybridChartDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={hybridChartDocs.role || ""}
        responsibilities={hybridChartDocs.responsibilities}
      />
      <ProjectLessons lessons={hybridChartDocs.lessons || ""} />
      <ProjectImprovements improvements={hybridChartDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={hybridChartDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={hybridChartDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default HybridChart;
