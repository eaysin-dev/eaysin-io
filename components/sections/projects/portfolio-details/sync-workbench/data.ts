import { PortfolioDetail } from '@/constant/interfaces';
import { generateUId } from '@/utils/shortid';

export const syncWorkbenchDocs: PortfolioDetail = {
  id: generateUId(),
  title: 'Sync-Workbench — Workforce Management Solution',
  identity: 'sync-workbench',
  subtitle:
    'Sync-Workbench is a robust workforce management solution, streamlining employee operations with advanced tools for performance management, project tracking, compliance, and more.',
  description: [
    'Sync-Workbench is designed to optimize workforce operations, providing organizations with tools to manage employees, projects, and compliance efficiently. The platform centralizes essential workforce management functionalities, ensuring better collaboration, streamlined workflows, and improved decision-making through analytics and automation.',
    "The solution encompasses role-based access control, time tracking, skill management, payroll, internal communication, and more. Whether you're managing onboarding, project assignments, or performance evaluations, Sync-Workbench offers a scalable and secure environment tailored to modern business needs.",
  ],
  clientInformation: {
    company: 'Sync-Tech Solutions',
    date: 'July 2024 - Present',
  },
  githubLink: 'https://github.com/eaysin-dev/sync-workbench-client.git',
  liveLink: 'https://sync-workbench-client.vercel.app/',
  isConfidential: false,
  duration: 'Ongoing',
  organization: 'N/A',
  tagline: 'Streamlining workforce management with cutting-edge tools.',
  overview:
    'Sync-Workbench centralizes employee and project management, providing a seamless experience across departments and locations. Its customizable features and integrations make it an essential tool for businesses aiming to enhance operational efficiency.',
  keyFeatures: [
    {
      id: generateUId(),
      label: 'Role-Based Access Control',
      description:
        'Define roles like Admin, Manager, and Employee with specific permissions, ensuring secure and fine-grained access to system functionalities.',
    },
    {
      id: generateUId(),
      label: 'Advanced Reporting & Analytics',
      description:
        'Generate detailed reports and monitor key metrics, such as employee performance, attendance, and productivity, via interactive dashboards.',
    },
    {
      id: generateUId(),
      label: 'Automated Onboarding & Offboarding',
      description:
        'Simplify employee transitions with automated workflows for onboarding tasks, document collection, and training assignments, as well as offboarding procedures.',
    },
    {
      id: generateUId(),
      label: 'Time & Attendance Tracking',
      description:
        'Real-time attendance tracking with integration options for biometric systems and mobile apps, alongside features for leave and overtime management.',
    },
    {
      id: generateUId(),
      label: 'Employee Performance Management',
      description:
        'Track employee goals, KPIs, and peer reviews with tools for continuous feedback and performance improvement.',
    },
    {
      id: generateUId(),
      label: 'Integration with HR & IT Systems',
      description:
        'Seamlessly integrate with HRIS, payroll, and IT systems for unified management across departments.',
    },
  ],
  usage: [
    {
      id: generateUId(),
      title: 'Role Configuration',
      description:
        'Admins can configure roles and permissions through a user-friendly interface.',
      image: '',
      alt: 'Role Configuration',
    },
    {
      id: generateUId(),
      title: 'Time Tracking Dashboard',
      description:
        'Monitor employee attendance and manage shift schedules using the time tracking dashboard.',
      image: '',
      alt: 'Time Tracking',
    },
    {
      id: generateUId(),
      title: 'Employee Performance Dashboard',
      description:
        'Evaluate and track employee performance with detailed analytics and reporting tools.',
      image: '',
      alt: 'Performance Dashboard',
    },
  ],
  techStack: [
    'React.js',
    'TypeScript',
    'Redux Toolkit',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
  ],
  challenges: [
    {
      label: 'Handling Scalability',
      solutions: [
        {
          id: generateUId(),
          text: 'Adopted a microservices architecture to ensure scalability.',
        },
        {
          id: generateUId(),
          text: 'Implemented database sharding for handling large data volumes.',
        },
      ],
    },
  ],
  images: [
    {
      id: generateUId(),
      alt: 'Dashboard Overview',
      src: '/portfolio/sync-workbench/01',
    },
    {
      id: generateUId(),
      alt: 'Employee Management',
      src: '/portfolio/sync-workbench/03',
    },
  ],
  role: 'Full-Stack Developer',
  responsibilities: [
    {
      id: generateUId(),
      label: 'Frontend Development',
      description:
        'Developed and optimized the user interface using React.js and Tailwind CSS.',
    },
    {
      id: generateUId(),
      label: 'API Integration',
      description:
        'Integrated RESTful APIs for real-time data synchronization between the client and server.',
    },
    {
      id: generateUId(),
      label: 'Role-Based Access Implementation',
      description:
        'Designed and implemented the RBAC system for secure user access.',
    },
  ],
  lessons:
    'Gained experience in building scalable, feature-rich workforce management solutions with real-time functionalities.',
  improvements:
    'Optimized data fetching mechanisms to improve dashboard performance under heavy loads.',
  blogCaseStudies: {
    title: 'Sync-Workbench Blog Case Studies',
    links: [
      {
        id: generateUId(),
        label: 'Building Scalable Workforce Solutions',
        url: 'https://example.com/blog/workforce-solutions',
      },
    ],
  },
  externalResource: {
    title: 'Sync-Workbench External Resources',
    links: [
      {
        id: generateUId(),
        label: 'Documentation',
        url: 'https://sync-workbench.com/docs',
      },
      {
        id: generateUId(),
        label: 'GitHub Repository',
        url: 'https://github.com/yourusername/sync-workbench',
      },
    ],
  },
};
