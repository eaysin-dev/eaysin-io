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
import { tusoDocs } from './data';

const Tuso = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={tusoDocs.title}
        duration={tusoDocs.clientInformation?.date || ''}
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
        role={tusoDocs.role || ''}
        responsibilities={tusoDocs.responsibilities}
      />
      <ProjectLessons lessons={tusoDocs.lessons || ''} />
      <ProjectImprovements improvements={tusoDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={tusoDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={tusoDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default Tuso;
