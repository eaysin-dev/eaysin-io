
import ProjectOverview from "@/components/ui/project-details/overview";
import { reactFormInteractionsDocs } from "./data";
import ProjectKeyFeatures from "@/components/ui/project-details/key-features";
import ProjectInstallation from "@/components/ui/project-details/installation";
import ProjectUsage from "@/components/ui/project-details/usage";
import ProjectTechStack from "@/components/ui/project-details/tech-stack";
import ProjectChallenges from "@/components/ui/project-details/challenges";
import ProjectApis from "@/components/ui/project-details/apis";
import ProjectRole from "@/components/ui/project-details/role";
import ProjectLessons from "@/components/ui/project-details/lessons";
import ProjectImprovements from "@/components/ui/project-details/improvements";
import ProjectValidationsFeature from "@/components/ui/project-details/validations-feature";
import ProjectResources from "@/components/ui/project-details/resources";

const ReactFormInteractions = () => {
  return (
    <div className="">
      <ProjectOverview
        title={reactFormInteractionsDocs.title}
        duration={reactFormInteractionsDocs.clientInformation?.date || ""}
        organization={reactFormInteractionsDocs.organization}
        tagline={reactFormInteractionsDocs.tagline}
        overview={reactFormInteractionsDocs.overview}
      />
      <ProjectKeyFeatures features={reactFormInteractionsDocs.keyFeatures} />
      <ProjectInstallation
        installationSteps={reactFormInteractionsDocs.installationStep || []}
      />
      <ProjectUsage usages={reactFormInteractionsDocs?.usage || []} />
      <ProjectTechStack techStack={reactFormInteractionsDocs.techStack} />
      <ProjectChallenges challenges={reactFormInteractionsDocs.challenges} />
      <ProjectApis apis={reactFormInteractionsDocs?.api || []} />
      <ProjectRole
        role={reactFormInteractionsDocs.role || ""}
        responsibilities={reactFormInteractionsDocs.responsibilities}
      />
      <ProjectLessons lessons={reactFormInteractionsDocs.lessons || ""} />
      <ProjectImprovements
        improvements={reactFormInteractionsDocs.improvements || ""}
      />
      {/* Add this line */}
      <ProjectValidationsFeature
        validationRules={reactFormInteractionsDocs?.validationRules || {}}
      />
      {/* Add this line */}
      <ProjectResources
        title="Blog & Case Studies"
        links={reactFormInteractionsDocs?.blogCaseStudies?.links || []}
      />
      <ProjectResources
        title="External Resource"
        links={reactFormInteractionsDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default ReactFormInteractions;
