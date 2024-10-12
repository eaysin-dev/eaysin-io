import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";

export const careproDocs: PortfolioDetail = {
  id: uuid(),
  identity: "carepro",
  subtitle:
    "Carepro is a government-sponsored healthcare system designed to streamline patient management, treatment tracking, and doctor-patient interactions.",
  description: [
    "Contributed to the development of a government-sponsored healthcare ecosystem project within a collaborative team environment. Played a key role in designing and implementing features to manage medical treatments, patient records, and doctor interactions. Facilitated the integration of diverse medical facilities under different departments.",
    "Collaborated effectively with team members and stakeholders to meet project objectives and comply with government regulations.",
  ],
  clientInformation: {
    company: "Excel Technologies Ltd.",
    date: "Jan 2023 - Sep 2023",
  },
  githubLink: "",
  liveLink: "",
  isConfidential: true,

  title: "Carepro — Health Care Ecosystem",
  duration: "Jan 2023 - Sep 2023",
  organization: "Associated with Excel Technologies Ltd",
  tagline: "Streamlining patient management and treatment tracking.",
  overview:
    "Carepro is a government-sponsored healthcare system designed to streamline patient management, treatment tracking, and doctor-patient interactions. The platform ensures efficient management of patient records, medical treatments, and seamless communication between doctors and patients. This project integrates a variety of modular features, from department settings to patient admission and specialized medical services.",
  keyFeatures: [
    {
      id: uuid(),
      label: "User Management",
      description:
        "Centralized user roles and permissions for facility management.",
    },
    {
      id: uuid(),
      label: "Department Management",
      description: "Configure and organize healthcare departments efficiently.",
    },
    {
      id: uuid(),
      label: "Patient Record Management",
      description:
        "Efficient handling of patient records and treatment history.",
    },
    {
      id: uuid(),
      label: "Real-time Communication",
      description:
        "Seamless doctor-patient interactions and communication tools.",
    },
    {
      id: uuid(),
      label: "Medical Encounter Tracking",
      description: "Capture and manage patient visits and treatments.",
    },
    {
      id: uuid(),
      label: "Reporting and Analytics",
      description:
        "Visual dashboards for tracking patient progress and hospital performance.",
    },
    {
      id: uuid(),
      label: "Antenatal Care (ANC)",
      description:
        "Track maternal health and ensure timely screenings and check-ups.",
    },
    {
      id: uuid(),
      label: "Service Queues",
      description:
        "Manage and track various medical queues such as Pharmacy, Investigation, and Service.",
    },
    {
      id: uuid(),
      label: "Investigation and Surgery Modules",
      description:
        "Facilitate tracking of patient investigations and surgeries.",
    },
    {
      id: uuid(),
      label: "Referral and Follow-up Systems",
      description:
        "Ensure seamless patient transfers between healthcare departments.",
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
      label: "Optimizing performance in a complex React application.",
      link: "https://eaysin-arafat.hashnode.dev/optimizing-performance-in-a-react-application-a-case-study",
      solutions: [
        {
          id: uuid(),
          text: "Implemented code-splitting to reduce the initial load time.",
        },
        {
          id: uuid(),
          text: "Used React.memo to prevent unnecessary re-renders.",
        },
      ],
    },
  ],
  images: [
    {
      id: uuid(),
      alt: "Screenshot of Carepro form interactions",
      src: "/portfolio/carepro/02.png",
    },
    {
      id: uuid(),
      alt: "Dashboard view of Carepro medical encounters",
      src: "/portfolio/carepro/04.png",
    },
  ],
  role: "Full-Stack Developer",
  responsibilities: [
    {
      id: uuid(),
      description:
        "Developed and integrated form interactions to simplify user input and streamline processes.",
    },
    {
      id: uuid(),
      description:
        "Managed patient encounters, ensuring that doctor-patient interactions were captured effectively.",
    },
    {
      id: uuid(),
      description:
        "Integrated ANC (Antenatal Care) screenings to track maternal health and monitor patient progress.",
    },
    {
      id: uuid(),
      description:
        "Implemented referral systems for smooth transitions between different healthcare departments.",
    },
    {
      id: uuid(),
      description:
        "Built service queues for Pharmacy, Investigations, and General Services, ensuring efficient handling of patients.",
    },
    {
      id: uuid(),
      description:
        "Designed and developed modules such as Vital, PEP, PrEP, and TB services to cater to diverse healthcare needs.",
    },
    {
      id: uuid(),
      description:
        "Created dynamic dashboards and report charts for real-time data visualization and analysis.",
    },
  ],
  lessons:
    "Learned the importance of optimizing performance in large-scale applications and effective state management strategies.",
  improvements:
    "Future improvements could include integrating AI for predictive analytics and enhancing user experience with a more intuitive UI.",
  blogCaseStudies: {
    title: "Blog & Case Studies",
    links: [
      {
        id: uuid(),
        label: "React Documentation",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      {
        id: uuid(),
        label: "Redux Documentation",
        url: "https://redux.js.org/introduction/getting-started",
      },
      {
        id: uuid(),
        label: "Tailwind CSS Documentation",
        url: "https://tailwindcss.com/docs/installation",
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
