import { uuid } from "@/utils/shortid";

type Skills = {
  id: string;
  name: string;
  skills: string[];
}[];

export const skills: Skills = [
  { id: uuid(), name: "Language", skills: ["JavaScript", "TypeScript"] },
  {
    id: uuid(),
    name: "Frameworks/Librarys",
    skills: ["React Js", "Next Js", "Tailwind CSS"],
  },
  {
    id: uuid(),
    name: "State Management",
    skills: ["Redux Js (with Redux Toolkit)"],
  },
  {
    id: uuid(),
    name: "Testing Library",
    skills: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    id: uuid(),
    name: "Version Control & Package Management",
    skills: ["Git & GitHub", "npm & yarn"],
  },
  {
    id: uuid(),
    name: "Backend Development (Basic)",
    skills: ["Node Js", "Express Js"],
  },
];
