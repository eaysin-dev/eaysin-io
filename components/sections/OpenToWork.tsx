import { Code2, GitBranch, Handshake, Rocket, SearchCheck } from 'lucide-react';
import { Card } from '../ui/card';
import Header from '../ui/header';

const openToItems = [
  {
    icon: <Code2 className='w-6 h-6 text-green-600' />,
    title: 'Frontend Development',
    description: 'Building performant, accessible user interfaces',
  },
  {
    icon: <GitBranch className='w-6 h-6 text-green-600' />,
    title: 'Full-Stack Projects',
    description: 'End-to-end web application development',
  },
  {
    icon: <Handshake className='w-6 h-6 text-green-600' />,
    title: 'Technical Collaborations',
    description: 'Joint ventures on innovative ideas',
  },
  {
    icon: <Rocket className='w-6 h-6 text-green-600' />,
    title: 'Open Source',
    description: 'Contributing to meaningful projects',
  },
  {
    icon: <SearchCheck className='w-6 h-6 text-green-600' />,
    title: 'Code Reviews',
    description: 'Quality assurance & best practices',
  },
];

export const OpenToWork = () => {
  return (
    <section id='openToWork' className='container'>
      <Header
        title='Open to collaborate on:'
        description="Excited to contribute to innovative projects, tackle challenging problems, and build scalable solutions. Let's create something amazing together!"
      />

      {/* Technologies Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {openToItems.map((item) => (
          <Card
            key={item.title}
            className='p-4 hover:border-green-600/30 transition-colors group'
          >
            <div className='flex items-center gap-3'>
              <span className='group-hover:-translate-y-1 transition-transform'>
                {item.icon}
              </span>
              <div>
                <h4 className='font-medium'>{item.title}</h4>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
