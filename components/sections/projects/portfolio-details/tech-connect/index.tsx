import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectOverview from "@/components/ui/project-details/overview";
import ProjectResources from "@/components/ui/project-details/resources";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectScreenshots from "@/components/ui/project-details/screenshots";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import { techConnectDocs } from "./data";

const TechConnect = () => {
  return (
    <div className="">
      <ProjectOverview
        title={techConnectDocs.title}
        duration={techConnectDocs.clientInformation?.date || ""}
        organization={techConnectDocs.organization}
        tagline={techConnectDocs.tagline}
        overview={techConnectDocs.overview}
      />
      <ProjectKeyFeatures features={techConnectDocs.keyFeatures} />
      <ProjectTechStack techStack={techConnectDocs.techStack} />
      <ProjectChallenges challenges={techConnectDocs.challenges} />
      <ProjectScreenshots
        screenshots={techConnectDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={techConnectDocs.role || ""}
        responsibilities={techConnectDocs.responsibilities}
      />
      <ProjectLessons lessons={techConnectDocs.lessons || ""} />
      <ProjectImprovements improvements={techConnectDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={techConnectDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={techConnectDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default TechConnect;
