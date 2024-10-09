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
import { jsUtilityDocs } from "./data";

const JsUtility = () => {
  return (
    <div className="">
      <ProjectOverview
        title={jsUtilityDocs.title}
        duration={jsUtilityDocs.duration}
        organization={jsUtilityDocs.organization}
        tagline={jsUtilityDocs.tagline}
        overview={jsUtilityDocs.overview}
      />
      <ProjectKeyFeatures features={jsUtilityDocs.keyFeatures} />
      <ProjectInstallation
        installationSteps={jsUtilityDocs.installationStep || []}
      />
      <ProjectUsage usages={jsUtilityDocs?.usage || []} />
      <ProjectTechStack techStack={jsUtilityDocs.techStack} />
      <ProjectChallenges challenges={jsUtilityDocs.challenges} />
      <ProjectApis apis={jsUtilityDocs?.api || []} />
      <ProjectRole
        role={jsUtilityDocs.role || ""}
        responsibilities={jsUtilityDocs.responsibilities}
      />
      <ProjectLessons lessons={jsUtilityDocs.lessons || ""} />
      <ProjectImprovements improvements={jsUtilityDocs.improvements || ""} />

      <ProjectResources
        title="Blog & Case Studies"
        links={jsUtilityDocs?.blogCaseStudies?.links || []}
      />
      <ProjectResources
        title="External Resource"
        links={jsUtilityDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default JsUtility;
