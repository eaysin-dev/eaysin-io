import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";

export const fileDriveDocs: PortfolioDetail = {
  id: uuid(),
  title: "FileDrive — File Management Platform",

  identity: "fileDrive",
  subtitle: "A comprehensive file management platform",
  description: [
    "FileDrive is a comprehensive file management platform designed to streamline the process of storing, sharing, and managing files among individuals and organizations. With FileDrive, users can securely upload files of various types, including PDFs, images, PNGs, SVGs, and more. Users can create organizations to manage files within specific groups or teams and grant role-based access to files.",
    "The platform offers advanced features such as category-based file organization and authentication powered by Clerk. FileDrive also integrates with Convex, a third-party service, for backend operations.",
  ],

  githubLink: "https://github.com/eaysin-arafat/file-drive.git",
  liveLink: "",
  clientInformation: { date: "08 April 2024" },

  duration: "Feb 2023 - Aug 2023",
  organization: "Personal Project",
  tagline:
    "Streamlining file management and sharing for teams and individuals.",
  overview:
    "FileDrive is a file management platform that allows individuals and teams to securely store, manage, and share files. It offers advanced features like role-based access control, real-time collaboration, and responsive design to ensure a seamless experience for all users, whether on desktop or mobile devices.",
  keyFeatures: [
    {
      id: uuid(),
      label: "Secure File Upload",
      description:
        "Allows users to securely upload and share files, including PDFs and images.",
    },
    {
      id: uuid(),
      label: "Organization Management",
      description:
        "Users can create and manage organizations, assigning role-based permissions to members.",
    },
    {
      id: uuid(),
      label: "Role-Based Access Control",
      description:
        "Ensures only authorized users have access to specific files, based on roles within an organization.",
    },
    {
      id: uuid(),
      label: "Real-Time Collaboration",
      description: "Enables teams to share and manage files in real-time.",
    },
    {
      id: uuid(),
      label: "Responsive Design",
      description:
        "Provides a fully responsive layout for seamless use on any device.",
    },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Convex",
    "Clerk",
    "Tailwind CSS",
  ],
  challenges: [
    {
      label: "Implementing secure file upload and storage.",
      link: "https://eaysin-arafat.hashnode.dev/implementing-secure-file-uploads-in-a-file-management-app",
      solutions: [
        {
          id: uuid(),
          text: "Integrated Convex for secure backend management and file storage.",
        },
        {
          id: uuid(),
          text: "Used encryption to ensure files are securely stored and transferred.",
        },
      ],
    },
    {
      label: "Optimizing performance with large datasets and file transfers.",
      link: "https://eaysin-arafat.hashnode.dev/optimizing-performance-in-file-management-app",
      solutions: [
        {
          id: uuid(),
          text: "Used Next.js for server-side rendering to optimize performance.",
        },
        {
          id: uuid(),
          text: "Implemented pagination and lazy loading to manage large datasets efficiently.",
        },
      ],
    },
  ],
  images: [
    {
      id: uuid(),
      alt: "FileDrive Dashboard",
      src: "/portfolio/file-drive/01.png",
    },
    {
      id: uuid(),
      alt: "File Upload Feature in FileDrive",
      src: "/portfolio/file-drive/02.png",
    },
  ],
  role: "Full-Stack Developer",
  responsibilities: [
    {
      id: uuid(),
      description:
        "Led the full-stack development of FileDrive, from initial design to deployment, ensuring a seamless file management experience for users.",
    },
    {
      id: uuid(),
      description:
        "Designed and implemented the Organization Management feature, allowing users to create and manage teams with role-based access to files.",
    },
    {
      id: uuid(),
      description:
        "Integrated secure file upload functionality to store and share files securely across teams and individuals.",
    },
    {
      id: uuid(),
      description:
        "Worked with Convex to manage backend services, ensuring efficient data handling and retrieval for user file storage.",
    },
    {
      id: uuid(),
      description:
        "Integrated Clerk for authentication, enabling secure access and role-based permissions across the platform.",
    },
  ],
  lessons:
    "Learned the importance of handling secure file uploads and efficient role-based access control in team-based applications.",
  improvements:
    "Future improvements could include better real-time collaboration tools and deeper integration with cloud storage solutions.",
  blogCaseStudies: {
    title: "Blog & Case Studies",
    links: [
      {
        id: uuid(),
        label: "Next.js Documentation",
        url: "https://nextjs.org/docs/getting-started",
      },
      {
        id: uuid(),
        label: "Convex Documentation",
        url: "https://docs.convex.dev/",
      },
      {
        id: uuid(),
        label: "Clerk Authentication Documentation",
        url: "https://clerk.dev/docs",
      },
    ],
  },
  externalResource: {
    title: "External Resources",
    links: [
      {
        id: uuid(),
        label: "Tailwind CSS Documentation",
        url: "https://tailwindcss.com/docs/installation",
      },
    ],
  },
};
