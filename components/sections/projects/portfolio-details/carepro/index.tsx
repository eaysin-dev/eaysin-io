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
import { careproDocs } from './data';

const Carepro = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={careproDocs.title}
        duration={careproDocs.clientInformation?.date || ''}
        organization={careproDocs.organization}
        tagline={careproDocs.tagline}
        overview={careproDocs.overview}
      />
      <ProjectKeyFeatures features={careproDocs.keyFeatures} />
      <ProjectTechStack techStack={careproDocs.techStack} />
      <ProjectChallenges challenges={careproDocs.challenges} />
      <ProjectScreenshots
        screenshots={careproDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={careproDocs.role || ''}
        responsibilities={careproDocs.responsibilities}
      />
      <ProjectLessons lessons={careproDocs.lessons || ''} />
      <ProjectImprovements improvements={careproDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={careproDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={careproDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default Carepro;
