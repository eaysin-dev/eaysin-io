import { uuid } from "@/utils/shortid";

export interface ClientInformation {
  client?: string;
  company?: string;
  date?: string;
}

export interface ListItem {
  id: string;
  label?: string;
  description?: string;
}

export interface ExternalResource {
  id: string;
  [key: string]: string;
}

export interface Portfolio {
  id: string;
  identity: string;
  title: string;
  subtitle: string;
  category: "reactJs" | "nextJs" | "library";
  description: string[];
  image: { url: string; title: string }[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  isConfidential?: boolean;
  clientInformation: ClientInformation;
  externalResource?: ExternalResource[];
}

export const portfolio: Portfolio[] = [
  {
    id: uuid(),
    identity: "reactFormInteractions",
    title: "react-form-interactions",
    subtitle: "A React Form State and Validation Library",
    category: "library",
    description: [
      "Developed a reusable React library (react-form-interactions) to simplify form state management and validation in React applications. Define comprehensive validation rules for form fields including required fields, minimum/maximum lengths, patterns, and more.",
      "Easily extend with custom validation rules and behaviors tailored to specific application requirements. Designed for seamless integration with React applications using hooks and functional components.",
      "Automatically manage and display error messages associated with form fields based on validation rules.",
    ],
    image: [],
    technologies: ["TypeScript", "React"],
    githubLink: "https://github.com/eaysin-arafat/react-form-interactions",
    liveLink:
      "https://www.npmjs.com/package/react-form-interactions?activeTab=readme",
    clientInformation: {
      date: "July 07, 2024 (Last Version)",
    },
  },
  {
    id: uuid(),
    identity: "tuso",
    title: "TUSO",
    subtitle:
      "TUSO is a platform for reporting, managing, and resolving system issues, featuring secure user authentication, real-time notifications, and an integrated Remote Desktop Protocol (RDP) for live troubleshooting.",
    category: "reactJs",
    description: [
      "Tuso is a robust system issue tracking platform designed to streamline the process of reporting, managing, and resolving system issues efficiently. With Tuso, users can easily report system issues they encounter, while support staff can effectively track, prioritize, and resolve these issues in a timely manner. The platform provides a user-friendly interface for both users and support staff, ensuring seamless communication and collaboration throughout the issue resolution process.",
      "Developed a problem management system adaptable for various projects or institutions Implemented role-based relationships to facilitate efficient problem resolution, ensuring the right individuals have appropriate access levels. Tuso features a secure user authentication system, allowing users to register, log in, and manage their accounts securely. This ensures that only authorized users can access the platform and report system issues. Users can create tickets to report system issues effortlessly. The ticket creation process is user-friendly, allowing users to provide detailed descriptions, screenshots, and other relevant information to help support staff understand and address the reported issues effectively.",
      "Support staff can manage tickets efficiently through the intuitive support dashboard. They can view, assign, prioritize, and track tickets based on their status and severity, ensuring that critical issues are addressed promptly.",
      "Support staff can communicate with users, provide updates, and resolve reported issues directly within the platform. This streamlines the issue resolution process and ensures clear communication between users and support staff throughout the entire process.",
      "Admins have access to administrative features, allowing them to manage users, configure system settings, and monitor system performance. This ensures that the platform operates smoothly and efficiently.",
    ],
    image: [],
    technologies: [
      "Typescript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    clientInformation: {
      company: "Excel Technologies Ltd.",
      date: "March 15, 2024",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
    identity: "carepro",
    title: "SmartCare Pro",
    subtitle:
      "Carepro is a government-sponsored healthcare system designed to streamline patient management, treatment tracking, and doctor-patient interactions.",
    description: [
      "Contributed to the development of a government-sponsored healthcare ecosystem project within a collaborative team environment. Played a key role in designing and implementing features to manage medical treatments, patient records, and doctor interactions. Facilitated the integration of diverse medical facilities under different departments.",
      "Collaborated effectively with team members and stakeholders to meet project objectives and comply with government regulations.",
    ],
    category: "reactJs",
    image: [],
    technologies: [
      "TypeScript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    clientInformation: {
      company: "Excel Technologies Ltd.",
      date: "December 12, 2023",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
    externalResource: [
      {
        id: uuid(),
        label: "Carepro Usage Tutorial (YouTube Playlist)",
        YouTube:
          "https://youtube.com/playlist?list=PLKI8pcPmyPbeK6LZBqhcXy4xHgIgxrfxF&si=GC3HC8EG1F-W145u",
      },
    ],
  },
  {
    id: uuid(),
    identity: "hybridChart",
    title: "HybridChart",
    subtitle: "Healthcare System",
    description: [
      "HybridChart is an application designed to help healthcare providers manage patient data, schedules, and treatment plans.",
      "It aims to improve workflow efficiency by offering tools for real-time collaboration between healthcare staff.",
    ],
    category: "reactJs",
    image: [],
    technologies: ["JavaScript", "React Js", "Redux Toolkit", "Scss"],
    clientInformation: {
      company: "Blackrock IT Solutions",
      date: "",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
    identity: "techConnect",
    title: "TechConnect",
    subtitle: "Employee Management System",
    description: [
      "TechConnect is an employee management platform that helps organizations track employee performance, generate reports, and manage internal communication efficiently.",
      "It provides a detailed dashboard for managers to monitor team productivity.",
    ],
    category: "reactJs",
    image: [],
    technologies: ["JavaScript", "React Js", "Redux Toolkit", "Scss"],
    clientInformation: {
      company: "Blackrock IT Solutions",
      date: "",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
    identity: "fileDrive",
    title: "File Drive",
    subtitle: "A comprehensive file management platform",
    category: "nextJs",
    description: [
      "FileDrive is a comprehensive file management platform designed to streamline the process of storing, sharing, and managing files among individuals and organizations. With FileDrive, users can securely upload files of various types, including PDFs, images, PNGs, SVGs, and more. Users can create organizations to manage files within specific groups or teams and grant role-based access to files.",
      "The platform offers advanced features such as category-based file organization and authentication powered by Clerk. FileDrive also integrates with Convex, a third-party service, for backend operations.",
    ],
    image: [
      {
        url: "/portfolio/file_drive/01.png",
        title: "screenshot 1",
      },
      {
        url: "/portfolio/file_drive/02.png",
        title: "screenshot 2",
      },
      {
        url: "/portfolio/file_drive/03.png",
        title: "screenshot 3",
      },
      {
        url: "/portfolio/file_drive/04.png",
        title: "screenshot 4",
      },
      {
        url: "/portfolio/file_drive/05.png",
        title: "screenshot 5",
      },
      {
        url: "/portfolio/file_drive/06.png",
        title: "screenshot 6",
      },
      {
        url: "/portfolio/file_drive/07.png",
        title: "screenshot 8",
      },
      {
        url: "/portfolio/file_drive/08.png",
        title: "screenshot 9",
      },
      {
        url: "/portfolio/file_drive/09.png",
        title: "screenshot 9",
      },
    ],
    technologies: [
      "JavaScript",
      "React Js",
      "Next Js",
      "Clerk(Authentication)",
      "Convex(Backend)",
      "Tailwind Css",
    ],
    githubLink: "https://github.com/eaysin-arafat/file-drive.git",
    liveLink: "",
    clientInformation: { date: "08 April 2024" },
  },
  {
    id: uuid(),
    identity: "ecommarce",
    title: "Ecommarce Platform",
    subtitle:
      "an online destination where buyers shop for goods and sellers offer products and services.",
    clientInformation: {
      company: "Blackrock IT Solutions",
      date: "May 14, 2023",
    },
    category: "reactJs",
    description: [
      "I have led the development of the eCommerce platform that utilizes JavaScript, React.js, Redux Toolkit and Tailwind CSS. Adapted functionalities of easy product browsing, cart management and secure checkout systems. Utilized the Redux Toolkit for state management to ensure proper data flow and the system stability. Using Tailwind CSS to design an interface with a modern, reactive and responsive look and feel.",
      "Employed JavaScript for user interactions to ensure that the entire platform is dynamic and user-friendly.",
    ],
    image: [
      {
        url: "/portfolio/comfy_store/01.png",
        title: "screenshot 1",
      },
      {
        url: "/portfolio/comfy_store/02.png",
        title: "screenshot 2",
      },
      {
        url: "/portfolio/comfy_store/03.png",
        title: "screenshot 3",
      },
      {
        url: "/portfolio/comfy_store/04.png",
        title: "screenshot 4",
      },
      {
        url: "/portfolio/comfy_store/05.png",
        title: "screenshot 5",
      },
      {
        url: "/portfolio/comfy_store/06.png",
        title: "screenshot 6",
      },
      {
        url: "/portfolio/comfy_store/07.png",
        title: "screenshot 7",
      },
      {
        url: "/portfolio/comfy_store/08.png",
        title: "screenshot 8",
      },
      {
        url: "/portfolio/comfy_store/09.png",
        title: "screenshot 9",
      },
    ],
    technologies: ["JavaScript", "React JS", "Redux Toolkit", "Tailwind Css"],
    githubLink: "https://github.com/eaysin-arafat/ecommarce_client.git",
    liveLink: "https://ecommarce-client.vercel.app/",
  },
  {
    id: uuid(),
    identity: "jsUtility",
    title: "js-utility",
    subtitle:
      "A modern JavaScript utility library delivering modularity, performance & extras",
    category: "library",
    clientInformation: {
      date: "Under Development & Open for Contribution",
    },
    description: [
      "A modern JavaScript utility library delivering modularity, performance & extras JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm. It can be broken down into several main areas: Utilities, Function, String, Array, Collection, Object, Sequence.",
      "The library is composed of distinct, reusable modules that can be imported individually, reducing the overall bundle size and improving load times.",
      "Optimized for speed, the library ensures that your applications run efficiently, even with complex operations. Leveraging the principles of functional programming, the library promotes pure functions, immutability, and higher-order functions, leading to cleaner and more predictable code. Some of the key utility functions provided by the library include: Array manipulation, Object handling, String operations",
    ],
    image: [],
    technologies: ["JavaScript"],
    githubLink: "https://github.com/eaysin-arafat/js-utility",
    liveLink: "",
  },
];
