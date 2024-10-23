
import ProjectOverview from "@/components/ui/project-details/overview";
import { hybridChartDocs } from "./data";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectScreenshots from "@/components/ui/project-details/screenshots";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectResources from "@/components/ui/project-details/resources";

const HybridChart = () => {
  return (
    <div className="">
      <ProjectOverview
        title={hybridChartDocs.title}
        duration={hybridChartDocs.clientInformation?.date || ""}
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
