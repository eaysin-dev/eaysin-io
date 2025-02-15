import {
  ProjectChallenges,
  ProjectImprovements,
  ProjectInstallation,
  ProjectKeyFeatures,
  ProjectLessons,
  ProjectOverview,
  ProjectResources,
  ProjectRole,
  ProjectScreenshots,
  ProjectTechStack,
} from '@/components/ui/project-details';
import { ecommarceDocs } from './data';

const EcommarcePlatform = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={ecommarceDocs.title}
        duration={ecommarceDocs.clientInformation?.date || ''}
        organization={ecommarceDocs.organization}
        tagline={ecommarceDocs.tagline}
        overview={ecommarceDocs.overview}
      />
      <ProjectKeyFeatures features={ecommarceDocs.keyFeatures} />
      <ProjectTechStack techStack={ecommarceDocs.techStack} />
      <ProjectInstallation
        installationSteps={ecommarceDocs?.installationStep || []}
      />
      <ProjectChallenges challenges={ecommarceDocs.challenges} />
      <ProjectScreenshots
        screenshots={ecommarceDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={ecommarceDocs.role || ''}
        responsibilities={ecommarceDocs.responsibilities}
      />
      <ProjectLessons lessons={ecommarceDocs.lessons || ''} />
      <ProjectImprovements improvements={ecommarceDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={ecommarceDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={ecommarceDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default EcommarcePlatform;
