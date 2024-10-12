import ProjectApis from "../../../../ui/project-details/apis";
import ProjectChallenges from "../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../ui/project-details/improvements";
import ProjectInstallation from "../../../../ui/project-details/installation";
import ProjectKeyFeatures from "../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../ui/project-details/overview";
import ProjectResources from "../../../../ui/project-details/resources";
import ProjectRole from "../../../../ui/project-details/role";
import ProjectTechStack from "../../../../ui/project-details/tech-stack";
import ProjectUsage from "../../../../ui/project-details/usage";
import ProjectValidationsFeature from "../../../../ui/project-details/validations-feature";
import { reactFormInteractionsDocs } from "./data";

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
