import { ListItem } from "@/app/data/portfolio";
import { uuid } from "@/utils/shortid";

export const careproFeatures: ListItem[] = [
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
    description: "Efficient handling of patient records and treatment history.",
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
    description: "Facilitate tracking of patient investigations and surgeries.",
  },
  {
    id: uuid(),
    label: "Referral and Follow-up Systems",
    description:
      "Ensure seamless patient transfers between healthcare departments.",
  },
];

export const careproResponsibilities: ListItem[] = [
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
];
