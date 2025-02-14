import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiCode, FiFileText, FiGithub, FiGlobe } from 'react-icons/fi';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend?: string[];
    devOps?: string[];
    tools?: string[];
  };
  apis?: string[];
  roles: string[];
  challenges?: Array<{ problem: string; solution: string }>;
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
    apiDocs?: string;
  };
}

export const project: Project = {
  id: 'sync-workbench',
  title: 'Sync Workbench',
  description: 'Real-time collaborative code editor with version control',
  thumbnail: '/projects/sync-workbench.jpg',
  features: [
    'Real-time code collaboration',
    'Git integration',
    'Role-based access control',
    'Code version history',
  ],
  techStack: {
    frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    backend: ['Node.js', 'NestJS', 'PostgreSQL'],
    devOps: ['Docker', 'AWS EC2', 'GitHub Actions'],
    tools: ['Figma', 'Jira', 'Postman'],
  },
  apis: ['WebSocket (Socket.io)', 'GitHub API', 'Auth0'],
  roles: [
    'Led frontend architecture design',
    'Implemented real-time collaboration system',
    'Integrated GitHub API for version control',
    'Optimized WebSocket performance',
  ],
  challenges: [
    {
      problem: 'High latency in real-time updates',
      solution: 'Implemented debouncing and payload optimization',
    },
    {
      problem: 'Complex state management',
      solution: 'Designed Redux middleware for collaboration events',
    },
  ],
  links: {
    github: 'https://github.com/yourusername/sync-workbench',
    live: 'https://sync-workbench.demo',
    caseStudy: '/case-studies/sync-workbench.pdf',
    apiDocs: 'https://api.sync-workbench.docs',
  },
};

const ReactFormInteractions = () => {
  return (
    <div className=''>
      <div className='grid gap-4'>
        {/* <div className='relative h-64 rounded-lg overflow-hidden'>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className='object-cover'
          />
        </div> */}

        <Tabs defaultValue='overview' className='w-full'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='case-study'>Case Study</TabsTrigger>
            <TabsTrigger value='links'>Links</TabsTrigger>
          </TabsList>

          <TabsContent value='overview'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Features</h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {project.features.map((feature) => (
                    <li key={feature} className='flex items-center gap-2'>
                      <span className='text-primary'>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-2'>Tech Stack</h3>
                <div className='space-y-4'>
                  {Object.entries(project.techStack).map(
                    ([category, items]) => (
                      <div key={category}>
                        <h4 className='text-sm font-medium mb-2 capitalize'>
                          {category}
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {items.map((tech) => (
                            <Badge
                              key={tech}
                              className='rounded-none'
                              variant='outline'
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value='case-study'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold mb-4'>My Roles</h3>
                <ul className='space-y-2'>
                  {project.roles.map((role) => (
                    <li key={role} className='flex items-start gap-2'>
                      <span className='text-primary'>▹</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {project.challenges && (
                <div>
                  <h3 className='text-lg font-semibold mb-4'>
                    Challenges & Solutions
                  </h3>
                  <div className='space-y-4'>
                    {project.challenges.map(({ problem, solution }) => (
                      <div key={problem} className='p-4 rounded-lg bg-muted'>
                        <p className='font-medium text-destructive'>
                          Problem: {problem}
                        </p>
                        <p className='mt-1 text-primary'>
                          Solution: {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value='links'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {project.links.github && (
                <Button asChild variant='outline'>
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiGithub className='mr-2' />
                    GitHub Repository
                  </a>
                </Button>
              )}

              {project.links.live && (
                <Button asChild variant='outline'>
                  <a
                    href={project.links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiGlobe className='mr-2' />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.links.caseStudy && (
                <Button asChild variant='outline'>
                  <a
                    href={project.links.caseStudy}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiFileText className='mr-2' />
                    Case Study
                  </a>
                </Button>
              )}

              {project.links.apiDocs && (
                <Button asChild variant='outline'>
                  <a
                    href={project.links.apiDocs}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiCode className='mr-2' />
                    API Documentation
                  </a>
                </Button>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReactFormInteractions;
