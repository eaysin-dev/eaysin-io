import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectOverview from "@/components/ui/project-details/overview";
import ProjectResources from "@/components/ui/project-details/resources";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectScreenshots from "@/components/ui/project-details/screenshots";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import ProjectUsage from "@/components/ui/project-details/usage";
import { tusoDocs } from "./data";

const Tuso = () => {
  return (
    <div className="">
      <ProjectOverview
        title={tusoDocs.title}
        duration={tusoDocs.clientInformation?.date || ""}
        organization={tusoDocs.organization}
        tagline={tusoDocs.tagline}
        overview={tusoDocs.overview}
      />
      <ProjectKeyFeatures features={tusoDocs.keyFeatures} />
      <ProjectUsage usages={tusoDocs?.usage || []} />
      <ProjectTechStack techStack={tusoDocs.techStack} />
      <ProjectChallenges challenges={tusoDocs.challenges} />
      <ProjectScreenshots
        screenshots={tusoDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={tusoDocs.role || ""}
        responsibilities={tusoDocs.responsibilities}
      />
      <ProjectLessons lessons={tusoDocs.lessons || ""} />
      <ProjectImprovements improvements={tusoDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={tusoDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={tusoDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default Tuso;
