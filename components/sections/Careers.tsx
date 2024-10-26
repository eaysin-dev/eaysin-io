import { generateUId } from "@/utils/shortid";
import { BriefcaseIcon, ExternalLinkIcon, MapPinIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const careers = [
  {
    id: generateUId(),
    role: "React Developer",
    company: "Excel Technologies Ltd.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213",
    type: "On-Site",
    date: "Jan 2023 - Feb 2024",
    description:
      "Worked on government-sponsored healthcare projects, streamlining patient management and treatment tracking. Worked on TUSO, a platform for reporting, managing, and resolving system issues, featuring real-time notifications and integrated troubleshooting.",
    accomplishments: [
      "Developed and integrated key modules such as form interactions, medical encounter management, ANC screenings, referrals, and ward management.",
      "Contributed to reports and chart generation for effective patient tracking.",
      "Enhanced user experience through optimizing frontend interactions in the Carepro system.",
      "Contributed to core modules including dashboard, user management, ticket lifecycle, follow-up, RDP agent, and ticket resolution reports.",
      "Improved issue tracking by optimizing real-time notifications and user feedback processes.",
      "Integrated Remote Desktop Protocol (RDP) for live troubleshooting.",
    ],
    technologies: ["TypeScript", "React.js", "Redux Toolkit", "Tailwind CSS"],
    website: "https://www.excelbd.com/",
  },
  {
    id: generateUId(),
    role: "Frontend Developer",
    company: "Blackrock IT Solutions (Contract)",
    location: "Mesa, Arizona, USA",
    type: "Remote",
    date: "Mar 2024 - Aug 2024",
    description:
      "Contributed to developing healthcare and employee management platforms for improved collaboration and real-time updates.",
    accomplishments: [
      "Part of the frontend team responsible for implementing and integrating the scheduling system with the treatment planning module for HybridChart.",
      "Led the development of the Timesheets and Request Module for TechConnect, integrating it with backend APIs to ensure real-time data updates.",
      "Implemented secure authentication with role-based permissions for TechConnect.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "SCSS",
    ],
    website: "https://www.blackrockitsolutions.com/",
  },
];

export const Careers = () => {
  return (
    <section id="career" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-8 text-center">
        Career
      </h2>

      <div className="block-900-full grid lg:grid-cols-1 gap-5 pt-7">
        {careers?.map((career) => (
          <Card
            key={career.id}
            className="hover:shadow-lg transition-shadow rounded-md"
          >
            <CardHeader className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-semibold">
                  {career.role}
                </CardTitle>
                <p className="text-sm leading-7">{career.company}</p>
              </div>
              <div className="text-sm text-muted-foreground">{career.date}</div>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-7 mb-4">{career.description}</p>

              {/* Location and Type Section */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 mb-4">
                {/* Location Badge */}
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm leading-7">{career.location}</p>
                </div>

                {/* Job Type Badge */}
                {career.type && (
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm capitalize leading-7">
                      {career.type}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies and Accomplishments */}
              <div className="mb-2">
                <h3 className="mb-2">Key Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {career.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-semibold mb-1">
                  Accomplishments:
                </h3>
                <ul className="list-disc ml-5">
                  {career.accomplishments.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              {career.website && (
                <a href={career.website} target="_blank">
                  <Button
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    Company Website <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
