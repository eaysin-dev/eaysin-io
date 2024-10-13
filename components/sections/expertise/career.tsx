import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { uuid } from "@/utils/shortid";
import { BriefcaseIcon, ExternalLinkIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

export const careers = [
  {
    id: uuid(),
    role: "React Developer",
    company: "Excel Technologies Ltd.",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
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
    id: uuid(),
    role: "Frontend Developer",
    company: "Blackrock IT Solutions (Contract)",
    location: "Mesa, Arizona, USA",
    type: "Contract",
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

const Career = () => {
  return (
    <>
      <Typography variant="h2">Career</Typography>

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
                <Typography
                  variant="p"
                  className="text-sm text-muted-foreground"
                >
                  {career.company}
                </Typography>
              </div>
              <div className="text-sm text-muted-foreground">{career.date}</div>
            </CardHeader>

            <CardContent>
              <Typography
                variant="p"
                className="text-sm text-muted-foreground mb-4"
              >
                {career.description}
              </Typography>

              {/* Location and Type Section */}
              <div className="flex gap-4 mb-4">
                {/* Location Badge */}
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  <Typography variant="p" className="text-sm">
                    {career.location}
                  </Typography>
                </div>

                {/* Job Type Badge */}
                {career.type && (
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                    <Typography
                      variant="p"
                      className="text-sm capitalize text-muted-foreground"
                    >
                      {career.type}
                    </Typography>
                  </div>
                )}
              </div>

              {/* Technologies and Accomplishments */}
              <div className="mb-2">
                <Typography
                  variant="h3"
                  className="text-base font-semibold mb-1"
                >
                  Key Technologies:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {career.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <Typography
                  variant="h3"
                  className="text-base font-semibold mb-1"
                >
                  Accomplishments:
                </Typography>
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
                <Link href={career.website} target="_blank">
                  <Button
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    Company Website <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Career;
