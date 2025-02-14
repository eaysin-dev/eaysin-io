// import { Badge } from '../ui/badge';
// import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

// // Define a type for the technologies categories
// type Technologies = {
//   languages: string[];
//   frontend: string[];
//   backend: string[];
//   databases: string[];
//   tools: string[];
//   testing: string[];
// };

// // Updated technology categories with the defined type
// const technologies: Technologies = {
//   languages: ['JavaScript', 'TypeScript'],
//   frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux'],
//   backend: ['Node.js', 'Express.js', 'REST API'],
//   databases: ['MongoDB'],
//   tools: ['Git', 'Vite', 'Webpack'],
//   testing: ['Jest', 'Vitest', 'React Testing Library'],
// };

// export const Skills = () => {
//   return (
//     <section id='skills' className='container pt-24 sm:py-32'>
//       <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-8 text-center'>
//         Technologies I Use:
//       </h2>

//       {/* Technologies Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5'>
//         {Object.keys(technologies).map((category) => (
//           <Card key={category} className='hover:shadow-lg transition-shadow'>
//             <CardHeader>
//               <CardTitle className='text-lg font-semibold capitalize'>
//                 {category}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className='flex flex-wrap gap-2'>
//                 {technologies[category as keyof Technologies].map(
//                   (tech, idx) => (
//                     <Badge key={idx} variant='outline'>
//                       {tech}
//                     </Badge>
//                   ),
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <p className='mt-12 text-center text-sm lg:text-base font-medium p-4 rounded-none shadow-md bg-card text-card-foreground'>
//         I have a strong understanding of core languages like JavaScript and
//         TypeScript, allowing me to pick up and excel with any framework or
//         library in a short time. My approach focuses on depth and mastering the
//         underlying principles, enabling me to deliver high-quality solutions no
//         matter the technology stack.
//       </p>
//     </section>
//   );
// };

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code,
  Database,
  LayoutDashboard,
  Server,
  TestTube2,
  Wrench,
} from 'lucide-react';
import { Callout } from '../ui/callout';
import Header from '../ui/header';

type TechnologyCategory = {
  icon: React.ReactNode;
  color: string;
  items: string[];
};

const technologyCategories: Record<string, TechnologyCategory> = {
  languages: {
    icon: <Code className='w-5 h-5' />,
    color: 'text-blue-500',
    items: ['JavaScript', 'TypeScript'],
  },
  frontend: {
    icon: <LayoutDashboard className='w-5 h-5' />,
    color: 'text-emerald-500',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  backend: {
    icon: <Server className='w-5 h-5' />,
    color: 'text-purple-500',
    items: ['Node.js', 'Express.js', 'REST API'],
  },
  databases: {
    icon: <Database className='w-5 h-5' />,
    color: 'text-rose-500',
    items: ['MongoDB'],
  },
  tools: {
    icon: <Wrench className='w-5 h-5' />,
    color: 'text-amber-500',
    items: ['Git', 'Vite', 'Webpack'],
  },
  testing: {
    icon: <TestTube2 className='w-5 h-5' />,
    color: 'text-teal-500',
    items: ['Jest', 'Vitest', 'React Testing Library'],
  },
};

export const Skills = () => {
  return (
    <section
      id='skills'
      className='py-24 bg-gradient-to-b from-muted/10 to-background'
    >
      <div className='container'>
        <Header
          title='Skills'
          description='Tools and technologies I wield to craft digital experiences'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {Object.entries(technologyCategories).map(([category, { items }]) => (
            <Card
              key={category}
              className='hover:shadow-lg transition-all duration-300 group'
            >
              <CardHeader className='flex flex-row items-center space-y-0 space-x-3 pb-3'>
                <CardTitle className='text-lg font-semibold capitalize'>
                  {category}
                </CardTitle>
              </CardHeader>
              {/* <Separator className='mb-4' /> */}
              <CardContent className='flex flex-wrap gap-2'>
                {items.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Callout className='mt-12 mx-auto' type='info'>
          <div className='flex items-center gap-4'>
            <div>
              <p className='text-sm font-medium leading-relaxed'>
                My expertise in core web technologies like JavaScript and
                TypeScript enables me to rapidly adapt to any framework or
                library. I prioritize understanding fundamental concepts to
                deliver maintainable and scalable solutions across diverse tech
                stacks.
              </p>
            </div>
          </div>
        </Callout>
      </div>
    </section>
  );
};
