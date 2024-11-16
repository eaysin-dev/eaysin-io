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
import { syncWorkbenchDocs } from "./data";

const SyncWorkbench = () => {
  return (
    <div className="">
      <ProjectOverview
        title={syncWorkbenchDocs.title}
        duration={syncWorkbenchDocs.clientInformation?.date || ""}
        organization={syncWorkbenchDocs.organization}
        tagline={syncWorkbenchDocs.tagline}
        overview={syncWorkbenchDocs.overview}
      />
      <ProjectKeyFeatures features={syncWorkbenchDocs.keyFeatures} />
      <ProjectUsage usages={syncWorkbenchDocs?.usage || []} />
      <ProjectTechStack techStack={syncWorkbenchDocs.techStack} />
      <ProjectChallenges challenges={syncWorkbenchDocs.challenges} />
      <ProjectScreenshots
        screenshots={syncWorkbenchDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={syncWorkbenchDocs.role || ""}
        responsibilities={syncWorkbenchDocs.responsibilities}
      />
      <ProjectLessons lessons={syncWorkbenchDocs.lessons || ""} />
      <ProjectImprovements
        improvements={syncWorkbenchDocs.improvements || ""}
      />
      <ProjectResources
        title="Blog & Case Studies"
        links={syncWorkbenchDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={syncWorkbenchDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default SyncWorkbench;
