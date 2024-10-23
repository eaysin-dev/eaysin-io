import ProjectOverview from "@/components/ui/project-details/overview";
import { careproDocs } from "./data";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import ProjectScreenshots from "@/components/ui/project-details/screenshots";
import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectResources from "@/components/ui/project-details/resources";


const Carepro = () => {
  return (
    <div className="">
      <ProjectOverview
        title={careproDocs.title}
        duration={careproDocs.clientInformation?.date || ""}
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
