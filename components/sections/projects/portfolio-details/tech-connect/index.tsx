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
} from '@/components/ui/project-details';
import { techConnectDocs } from './data';

const TechConnect = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={techConnectDocs.title}
        duration={techConnectDocs.clientInformation?.date || ''}
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
        role={techConnectDocs.role || ''}
        responsibilities={techConnectDocs.responsibilities}
      />
      <ProjectLessons lessons={techConnectDocs.lessons || ''} />
      <ProjectImprovements improvements={techConnectDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={techConnectDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={techConnectDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default TechConnect;
