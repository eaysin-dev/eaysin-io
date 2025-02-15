import {
  ProjectApis,
  ProjectChallenges,
  ProjectImprovements,
  ProjectInstallation,
  ProjectKeyFeatures,
  ProjectLessons,
  ProjectOverview,
  ProjectResources,
  ProjectRole,
  ProjectTechStack,
  ProjectValidationsFeature,
} from '@/components/ui/project-details';
import { reactFormInteractionsDocs } from './data';

const ReactFormInteractions = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={reactFormInteractionsDocs.title}
        duration={reactFormInteractionsDocs.clientInformation?.date || ''}
        organization={reactFormInteractionsDocs.organization}
        tagline={reactFormInteractionsDocs.tagline}
        overview={reactFormInteractionsDocs.overview}
      />
      <ProjectKeyFeatures features={reactFormInteractionsDocs.keyFeatures} />
      <ProjectInstallation
        installationSteps={reactFormInteractionsDocs.installationStep || []}
      />
      {/* <ProjectUsage usages={reactFormInteractionsDocs?.usage || []} /> */}
      <ProjectTechStack techStack={reactFormInteractionsDocs.techStack} />
      <ProjectChallenges challenges={reactFormInteractionsDocs.challenges} />
      <ProjectApis apis={reactFormInteractionsDocs?.api || []} />
      <ProjectRole
        role={reactFormInteractionsDocs.role || ''}
        responsibilities={reactFormInteractionsDocs.responsibilities}
      />
      <ProjectLessons lessons={reactFormInteractionsDocs.lessons || ''} />
      <ProjectImprovements
        improvements={reactFormInteractionsDocs.improvements || ''}
      />
      {/* Add this line */}
      <ProjectValidationsFeature
        validationRules={reactFormInteractionsDocs?.validationRules || {}}
      />
      {/* Add this line */}
      <ProjectResources
        title='Blog & Case Studies'
        links={reactFormInteractionsDocs?.blogCaseStudies?.links || []}
      />
      <ProjectResources
        title='External Resource'
        links={reactFormInteractionsDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default ReactFormInteractions;
