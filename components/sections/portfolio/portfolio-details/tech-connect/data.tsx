import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";

export const techConnectDocs: PortfolioDetail = {
  id: uuid(),
  title: "TechConnect — Employee Management Platform",
  identity: "techConnect",
  subtitle: "Employee Management System",
  description: [
    "TechConnect is an employee management platform that helps organizations track employee performance, generate reports, and manage internal communication efficiently.",
    "It provides a detailed dashboard for managers to monitor team productivity.",
  ],
  clientInformation: {
    company: "Blackrock IT Solutions",
    date: "",
  },
  githubLink: "",
  liveLink: "",
  isConfidential: true,

  duration: "March 2022 - Dec 2022",
  organization: "Developed for Intranet Systems Ltd.",
  tagline: "Empowering organizations with real-time employee management tools.",
  overview:
    "TechConnect is a comprehensive employee management platform designed to improve team productivity, communication, and reporting through real-time data synchronization and role-based access controls. It provides a detailed performance dashboard to facilitate decision-making.",
  keyFeatures: [
    {
      id: uuid(),
      label: "Timesheets Module",
      description:
        "Allows employees to log work hours and managers to review and approve them in real-time.",
    },
    {
      id: uuid(),
      label: "Request Module",
      description:
        "Enables employees to submit requests (e.g., leave, reimbursements) and managers to process them efficiently.",
    },
    {
      id: uuid(),
      label: "Role-Based Authentication",
      description:
        "Secures data by ensuring that only authorized users can access specific areas of the platform based on their role.",
    },
    {
      id: uuid(),
      label: "Performance Dashboard",
      description:
        "Gives managers insights into team productivity and performance metrics to support better decision-making.",
    },
  ],
  techStack: [
    "React.js",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js (API)",
    "PostgreSQL (Database)",
  ],
  challenges: [
    {
      label: "Handling real-time updates efficiently.",
      link: "https://example.com/optimizing-realtime-updates",
      solutions: [
        {
          id: uuid(),
          text: "Implemented WebSocket connections for real-time data sync.",
        },
        {
          id: uuid(),
          text: "Used Redux Toolkit to streamline state management and reduce re-renders.",
        },
      ],
    },
    {
      label: "Ensuring data security with role-based permissions.",
      solutions: [
        {
          id: uuid(),
          text: "Implemented JWT-based authentication and role-based access control.",
        },
      ],
    },
  ],
  images: [
    {
      id: uuid(),
      alt: "Screenshot of the TechConnect dashboard",
      src: "/portfolio/tech-connect/02.png",
    },
    {
      id: uuid(),
      alt: "Timesheets feature screenshot in TechConnect",
      src: "/portfolio/tech-connect/04.png",
    },
    {
      id: uuid(),
      alt: "Timesheets feature screenshot in TechConnect",
      src: "/portfolio/tech-connect/05.png",
    },
    {
      id: uuid(),
      alt: "Timesheets feature screenshot in TechConnect",
      src: "/portfolio/tech-connect/09.png",
    },
    {
      id: uuid(),
      alt: "Timesheets feature screenshot in TechConnect",
      src: "/portfolio/tech-connect/04.png",
    },
    {
      id: uuid(),
      alt: "Timesheets feature screenshot in TechConnect",
      src: "/portfolio/tech-connect/09.png",
    },
  ],
  role: "Frontend Developer",
  responsibilities: [
    {
      id: uuid(),
      description:
        "Led the development of the Timesheets and Request Module, ensuring smooth integration with backend APIs for real-time data updates.",
    },
    {
      id: uuid(),
      description:
        "Implemented role-based authentication to protect sensitive employee data and restrict access to authorized personnel.",
    },
    {
      id: uuid(),
      description:
        "Collaborated closely with the backend team to establish secure data handling practices and improve platform reliability.",
    },
    {
      id: uuid(),
      description:
        "Designed and optimized the user interface of the dashboard to provide managers with insights into team performance.",
    },
  ],
  lessons:
    "Learned how to manage real-time data updates efficiently and the importance of proper authentication and authorization mechanisms.",
  improvements:
    "Future iterations could include a more advanced analytics module for deeper insights and AI-powered predictive performance tracking.",
  blogCaseStudies: {
    title: "Blog & Case Studies",
    links: [
      {
        id: uuid(),
        label: "Real-time API Integration",
        url: "https://example.com/api-integration",
      },
      {
        id: uuid(),
        label: "Optimizing Redux for State Management",
        url: "https://redux.js.org/introduction/getting-started",
      },
    ],
  },
  externalResource: {
    title: "External Resource",
    links: [
      {
        id: uuid(),
        label: "React Documentation",
        url: "https://reactjs.org/docs/getting-started.html",
      },
    ],
  },
};
