import { Portfolio } from "@/app/data/portfolio";
import { uuid } from "@/utils/shortid";
import ProjectChallenges from "../../ui/ProjectChallenges";
import ProjectImprovements from "../../ui/ProjectImprovements";
import ProjectKeyFeatures, { KeyFeature } from "../../ui/ProjectKeyFeatures";
import ProjectLessons from "../../ui/ProjectLessons";
import ProjectOverview from "../../ui/ProjectOverview";
import ProjectResources, {
  ProjectResourcesType,
} from "../../ui/ProjectResources";
import ProjectRole, { Responsibility } from "../../ui/ProjectRole";
import ProjectScreenshots from "../../ui/ProjectScreenshots";
import ProjectTechStack from "../../ui/ProjectTechStack";

interface ProjectDetails {
  title: string;
  duration: string;
  organization: string;
  tagline: string;
  overview: string;
  keyFeatures: KeyFeature[];
  techStack: string[];
  challenges: {
    description: string;
    solutions: {
      id: string;
      text: string;
      codeSnippet?: string;
      link?: string;
    }[];
  }[];
  images: { id: string; src: string; alt: string }[];
  altTexts: string[];
  role: string;
  responsibilities: Responsibility[];
  lessons: string;
  improvements: string;
  blogCaseStudies: ProjectResourcesType;
  externalResource: ProjectResourcesType;
}

const Carepro = ({ portfolio }: { portfolio: Portfolio }) => {
  const projectDetails: ProjectDetails = {
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
        description:
          "Configure and organize healthcare departments efficiently.",
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
        description: "Optimizing performance in a complex React application.",
        solutions: [
          {
            id: uuid(),
            text: "Implemented code-splitting to reduce the initial load time.",
            codeSnippet: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`,
          },
          {
            id: uuid(),
            text: "Used React.memo to prevent unnecessary re-renders.",
            codeSnippet: `const MemoizedComponent = React.memo(MyComponent);`,
          },
        ],
      },
      {
        description: "Managing state across various modules.",
        solutions: [
          {
            id: uuid(),
            text: "Utilized Redux for global state management, ensuring data consistency.",
            link: "https://redux.js.org/introduction/getting-started",
          },
          {
            id: uuid(),
            text: "Created custom hooks for localized state management.",
            codeSnippet: `function useCustomHook() { const [state, setState] = useState(initialState); return [state, setState]; }`,
          },
        ],
      },
    ],
    images: [
      { id: uuid(), alt: "", src: "/portfolio/healthcare/02.png" },
      { id: uuid(), alt: "", src: "/portfolio/healthcare/04.png" },
    ],
    altTexts: [
      "Screenshot of Carepro form interactions",
      "Dashboard view of Carepro medical encounters",
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
      data: [
        {
          name: "React Documentation",
          link: "https://reactjs.org/docs/getting-started.html",
        },
        {
          name: "Redux Documentation",
          link: "https://redux.js.org/introduction/getting-started",
        },
        {
          name: "Tailwind CSS Documentation",
          link: "https://tailwindcss.com/docs/installation",
        },
      ],
    },
    externalResource: {
      title: "External Resource",
      data: [
        {
          name: "React Documentation",
          link: "https://reactjs.org/docs/getting-started.html",
        },
      ],
    },
  };

  return (
    <div className="">
      <ProjectOverview
        title={projectDetails.title}
        duration={projectDetails.duration}
        organization={projectDetails.organization}
        tagline={projectDetails.tagline}
        overview={projectDetails.overview}
      />
      <ProjectKeyFeatures features={projectDetails.keyFeatures} />
      <ProjectTechStack techStack={projectDetails.techStack} />
      <ProjectChallenges challenges={projectDetails.challenges} />
      <ProjectScreenshots
        screenshots={projectDetails.images}
        isCompanyProject
      />
      <ProjectRole
        role={projectDetails.role}
        responsibilities={projectDetails.responsibilities}
      />
      <ProjectLessons lessons={projectDetails.lessons} />
      <ProjectImprovements improvements={projectDetails.improvements} />
      <ProjectResources
        title="Blog & Case Studies"
        data={projectDetails?.blogCaseStudies?.data}
      />

      <ProjectResources
        title="External Resource"
        data={projectDetails.externalResource?.data}
      />
    </div>
  );
};

export default Carepro;
