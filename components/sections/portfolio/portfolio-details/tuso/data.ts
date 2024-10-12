import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";

export const tusoDocs: PortfolioDetail = {
  id: uuid(),
  title: "Tuso — System Issue Tracking Platform",
  identity: "tuso",
  subtitle:
    "TUSO is a platform for reporting, managing, and resolving system issues, featuring secure user authentication, real-time notifications, and an integrated Remote Desktop Protocol (RDP) for live troubleshooting.",
  description: [
    "Tuso is a robust system issue tracking platform designed to streamline the process of reporting, managing, and resolving system issues efficiently. With Tuso, users can easily report system issues they encounter, while support staff can effectively track, prioritize, and resolve these issues in a timely manner. The platform provides a user-friendly interface for both users and support staff, ensuring seamless communication and collaboration throughout the issue resolution process.",
    "Developed a problem management system adaptable for various projects or institutions Implemented role-based relationships to facilitate efficient problem resolution, ensuring the right individuals have appropriate access levels. Tuso features a secure user authentication system, allowing users to register, log in, and manage their accounts securely. This ensures that only authorized users can access the platform and report system issues. Users can create tickets to report system issues effortlessly. The ticket creation process is user-friendly, allowing users to provide detailed descriptions, screenshots, and other relevant information to help support staff understand and address the reported issues effectively.",
    "Support staff can manage tickets efficiently through the intuitive support dashboard. They can view, assign, prioritize, and track tickets based on their status and severity, ensuring that critical issues are addressed promptly.",
    "Support staff can communicate with users, provide updates, and resolve reported issues directly within the platform. This streamlines the issue resolution process and ensures clear communication between users and support staff throughout the entire process.",
    "Admins have access to administrative features, allowing them to manage users, configure system settings, and monitor system performance. This ensures that the platform operates smoothly and efficiently.",
  ],
  clientInformation: {
    company: "Excel Technologies Ltd.",
    date: "Oct 2023 - January 204",
  },
  githubLink: "",
  liveLink: "",
  isConfidential: true,
  duration: "",
  organization: "Your organization or independent project",
  tagline: "Streamlining issue reporting and resolution.",
  overview:
    "Tuso is a robust system issue tracking platform designed to streamline the process of reporting, managing, and resolving system issues efficiently. It allows users to report issues effortlessly while providing support staff with tools to prioritize and address these issues in real-time. With features like Remote Desktop Protocol (RDP) integration, Tuso enhances communication and collaboration between users and support teams.",
  keyFeatures: [
    {
      id: uuid(),
      label: "User Authentication",
      description:
        "Tuso features a secure user authentication system, allowing users to register, log in, and manage their accounts securely. This ensures that only authorized users can access the platform and report system issues.",
    },
    {
      id: uuid(),
      label: "Intuitive Ticket Creation",
      description:
        "Users can create tickets to report system issues effortlessly. The ticket creation process is user-friendly, allowing users to provide detailed descriptions, screenshots, and other relevant information to help support staff understand and address the reported issues effectively.",
    },
    {
      id: uuid(),
      label: "Efficient Ticket Management",
      description:
        "Support staff can manage tickets efficiently through the intuitive support dashboard. They can view, assign, prioritize, and track tickets based on their status and severity, ensuring that critical issues are addressed promptly.",
    },
    {
      id: uuid(),
      label: "Streamlined Ticket Resolution",
      description:
        "Support staff can communicate with users, provide updates, and resolve reported issues directly within the platform. This streamlines the issue resolution process and ensures clear communication between users and support staff throughout the entire process.",
    },
    {
      id: uuid(),
      label: "Real-time Notifications",
      description:
        "Tuso features a real-time notification system that notifies users and support staff of any updates or changes to their tickets. This helps users stay informed about the progress of their reported issues and enables support staff to respond promptly to new tickets and updates.",
    },
    {
      id: uuid(),
      label: "Remote Desktop Protocol (RDP)",
      description:
        "Tuso includes an integrated Remote Desktop Protocol (RDP) feature, allowing support staff to establish live connections with users' systems. This enables support staff to diagnose and resolve issues more effectively by accessing users' systems in real-time, providing immediate assistance and troubleshooting.",
    },
    {
      id: uuid(),
      label: "Administrative Features",
      description:
        "Admins have access to administrative features, allowing them to manage users, configure system settings, and monitor system performance. This ensures that the platform operates smoothly and efficiently.",
    },
  ],
  usage: [
    {
      id: uuid(),
      title: "Logging in to Tuso",
      description:
        "Users need to log in to the Tuso system using their credentials to access the platform.",
      image: "/portfolio/tuso/usage/login.png",
      alt: "Login Page",
    },
    {
      id: uuid(),
      title: "Create Issue Ticket",
      description:
        "Users can create issue tickets to report system issues they encounter.",
      image: "/portfolio/tuso/usage/create-issue-ticket.png",
      alt: "Create Issue Ticket",
    },
    {
      id: uuid(),
      title: "Follow up on Specific Ticket",
      description:
        "Users can follow up on specific tickets to track the progress of the issue resolution.",
      image: "/portfolio/tuso/usage/follow-up-on-specific-ticket.png",
      alt: "Follow Up Ticket",
    },
    {
      id: uuid(),
      title: "Resolve Ticket Through RDP",
      description:
        "Support staff can resolve tickets by establishing live connections with users' systems using the Remote Desktop Protocol (RDP) feature.",
      image: "/portfolio/tuso/usage/resolve-ticket-through-RDP.png",
      alt: "Resolve Ticket Through RDP",
    },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "RTK Query (Api Integration)",
    "Tailwind CSS",
  ],
  challenges: [
    {
      label: "Implementing real-time features in a ticketing system.",
      link: "https://example.com/your-challenge-blog", // Replace with your actual blog link
      solutions: [
        {
          id: uuid(),
          text: "Utilized WebSockets for real-time communication.",
        },
        {
          id: uuid(),
          text: "Implemented polling mechanisms for older browsers.",
        },
      ],
    },
  ],
  images: [
    { id: uuid(), alt: "Login Page", src: "/portfolio/tuso/04.png" },
    {
      id: uuid(),
      alt: "Create Issue Ticket",
      src: "/portfolio/tuso/05.png",
    },
    {
      id: uuid(),
      alt: "Follow Up Ticket",
      src: "/portfolio/tuso/06.png",
    },
    {
      id: uuid(),
      alt: "Resolve Ticket Through RDP",
      src: "/portfolio/tuso/08.png",
    },
  ],
  role: "React Developer",
  responsibilities: [
    {
      id: uuid(),
      label: "Role-Based Access",
      description:
        "Developed role-based access control to manage different permissions.",
    },
    {
      id: uuid(),
      label: "User Registration",
      description:
        "Created the user registration flow with validation and feedback mechanisms.",
    },
    {
      id: uuid(),
      label: "Ticket Creation",
      description:
        "Developed the ticket creation flow with automatic categorization.",
    },
    {
      id: uuid(),
      label: "SLA Tracking",
      description: "Integrated SLA tracking to monitor response times.",
    },
    {
      id: uuid(),
      label: "Notifications",
      description: "Implemented real-time notifications for ticket updates.",
    },
    {
      id: uuid(),
      label: "Real-time Updates",
      description:
        "Integrated real-time updates for issue tracking and user status.",
    },
    {
      id: uuid(),
      label: "Data Visualization",
      description:
        "Created interactive charts and graphs for visualizing system performance.",
    },
    {
      id: uuid(),
      label: "Notification Preferences",
      description: "Enabled customizable notification settings for users.",
    },
    {
      id: uuid(),
      label: "System Configurations",
      description:
        "Provided users with tools to manage system settings and permissions.",
    },
  ],
  lessons:
    "Learned best practices for building scalable applications with real-time features.",
  improvements:
    "Enhanced system performance and user experience through optimizations.",
  blogCaseStudies: {
    title: "Tuso Blog Case Studies",
    links: [
      {
        id: uuid(),
        label: "Performance Optimization",
        url: "https://example.com/performance-optimization",
      },
      {
        id: uuid(),
        label: "Real-time Features Implementation",
        url: "https://example.com/real-time-features",
      },
    ],
  },
  externalResource: {
    title: "Tuso External Resources",
    links: [
      {
        id: uuid(),
        label: "Documentation",
        url: "https://example.com/documentation",
      },
      {
        id: uuid(),
        label: "GitHub Repository",
        url: "https://github.com/eaysin-arafat/tuso",
      },
    ],
  },
};
