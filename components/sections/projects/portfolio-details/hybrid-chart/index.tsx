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
import { hybridChartDocs } from './data';

const HybridChart = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={hybridChartDocs.title}
        duration={hybridChartDocs.clientInformation?.date || ''}
        organization={hybridChartDocs.organization}
        tagline={hybridChartDocs.tagline}
        overview={hybridChartDocs.overview}
      />
      <ProjectKeyFeatures features={hybridChartDocs.keyFeatures} />
      <ProjectTechStack techStack={hybridChartDocs.techStack} />
      <ProjectChallenges challenges={hybridChartDocs.challenges} />
      <ProjectScreenshots
        screenshots={hybridChartDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={hybridChartDocs.role || ''}
        responsibilities={hybridChartDocs.responsibilities}
      />
      <ProjectLessons lessons={hybridChartDocs.lessons || ''} />
      <ProjectImprovements improvements={hybridChartDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={hybridChartDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={hybridChartDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default HybridChart;
