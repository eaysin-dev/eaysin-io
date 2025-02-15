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
import { fileDriveDocs } from './data';

const FileDrive = () => {
  return (
    <div className=''>
      <ProjectOverview
        title={fileDriveDocs.title}
        duration={fileDriveDocs.clientInformation?.date || ''}
        organization={fileDriveDocs.organization}
        tagline={fileDriveDocs.tagline}
        overview={fileDriveDocs.overview}
      />
      <ProjectKeyFeatures features={fileDriveDocs.keyFeatures} />
      <ProjectTechStack techStack={fileDriveDocs.techStack} />
      <ProjectChallenges challenges={fileDriveDocs.challenges} />
      <ProjectScreenshots screenshots={fileDriveDocs.images || []} />
      <ProjectRole
        role={fileDriveDocs.role || ''}
        responsibilities={fileDriveDocs.responsibilities}
      />
      <ProjectLessons lessons={fileDriveDocs.lessons || ''} />
      <ProjectImprovements improvements={fileDriveDocs.improvements || ''} />
      <ProjectResources
        title='Blog & Case Studies'
        links={fileDriveDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title='External Resource'
        links={fileDriveDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default FileDrive;
