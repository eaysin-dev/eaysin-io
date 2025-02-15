import {
  ProjectChallenges,
  ProjectImprovements,
  ProjectKeyFeatures,
  ProjectLessons,
  ProjectOverview,
  ProjectResources,
  ProjectRole,
  ProjectScreenshots,
  ProjectTechStack,
  ProjectUsage,
} from '@/components/ui/project-details';
import { syncWorkbenchDocs } from './data';

const SyncWorkbench = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={syncWorkbenchDocs.title}
        duration={syncWorkbenchDocs.clientInformation?.date || ''}
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
        role={syncWorkbenchDocs.role || ''}
        responsibilities={syncWorkbenchDocs.responsibilities}
      />
      <ProjectLessons lessons={syncWorkbenchDocs.lessons || ''} />
      <ProjectImprovements
        improvements={syncWorkbenchDocs.improvements || ''}
      />
      <ProjectResources
        title='Blog & Case Studies'
        links={syncWorkbenchDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={syncWorkbenchDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default SyncWorkbench;
