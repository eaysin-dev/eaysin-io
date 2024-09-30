"use client";

import { uuid } from "@/utils/shortid";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SectionHeader from "./ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export type Portfolio = {
  id: string;
  title: string;
  subtitle: string;
  category: "reactJs" | "nextJs" | "library";
  description: string[];
  image: { url: string; title: string }[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  isConfidential?: boolean;
  clientInformation?: { client: string; company: string; date: string };
  externalResource?: { [key: string]: string }[];
};

const recentWorks: Portfolio[] = [
  {
    id: uuid(),
    title: "React-form-interactions",
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
      client: "",
      company: "company",
      date: "July 07, 2024 (Last Version)",
    },
  },
  {
    id: uuid(),
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
      client: "",
      company: "Excel Technologies Ltd.",
      date: "March 15, 2024",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
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
      client: "",
      company: "Excel Technologies Ltd.",
      date: "December 12, 2023",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
    externalResource: [
      {
        YouTube:
          "https://youtube.com/playlist?list=PLKI8pcPmyPbeK6LZBqhcXy4xHgIgxrfxF&si=GC3HC8EG1F-W145u",
      },
    ],
  },
  {
    id: uuid(),
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
      client: "",
      company: "Blackrock IT Solutions",
      date: "",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
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
      client: "",
      company: "Blackrock IT Solutions",
      date: "",
    },
    githubLink: "",
    liveLink: "",
    isConfidential: true,
  },
  {
    id: uuid(),
    title: "Ecommarce Platform",
    subtitle:
      "an online destination where buyers shop for goods and sellers offer products and services.",
    clientInformation: {
      client: "",
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
    title: "js-utility",
    subtitle:
      "A modern JavaScript utility library delivering modularity, performance & extras",
    category: "library",
    clientInformation: {
      client: "",
      company: "",
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
  {
    id: uuid(),
    title: "File Drive",
    subtitle: "a comprehensive file management platform",
    category: "nextJs",
    clientInformation: {
      client: "",
      company: "",
      date: "08 April 2024",
    },
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
    isConfidential: false,
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState("all");

  const filterProjects = (category: string) => {
    if (category === "all") {
      return recentWorks;
    }
    return recentWorks.filter((work) => work.category === category);
  };

  const filteredWorks = filterProjects(activeTab);

  return (
    <section id="portfolio" className="section-container">
      <SectionHeader
        title="Recent Works"
        description="Here are some of our projects we done lately. Feel free to check them out."
        dataNum="03"
      />
      <div className="flex items-center justify-center mt-12 md:mt-0 mb-2 md:mb-5">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-[400px]"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="reactJs">React Js</TabsTrigger>
            <TabsTrigger value="nextJs">Next Js</TabsTrigger>
          </TabsList>
          <TabsContent value="account"></TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 pt-10">
        {filteredWorks.map((recentWork) => (
          <Card className="border border-muted p-1" key={recentWork?.id}>
            <CardHeader>
              <CardTitle className="mb-2">{recentWork?.title}</CardTitle>
              <CardDescription>{recentWork?.description[0]}</CardDescription>
            </CardHeader>

            <CardContent>
              {/* Technologies Section */}
              <div className="flex flex-wrap gap-2">
                {recentWork?.technologies?.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>

              {/* Client Info Section */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-muted-foreground">
                  Client Information
                </h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {Object.keys(recentWork?.clientInformation).map((key) => (
                    <div>
                      <p className="text-xs text-muted-foreground">{key}:</p>
                      <p className="text-sm">
                        {recentWork?.clientInformation[key] || ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col justify-end items-start gap-3">
              {recentWork?.isConfidential && (
                <p className="text-sm text-muted-foreground">
                  This is a private project for {recentWork?.clientInformation?.company}.
                </p>
              )}

              <div className="flex justify-between w-full">
                <Button asChild variant="outline">
                  <a
                    href="https://your-portfolio.com/project-details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {recentWork?.isConfidential ? "View Case Study" : "Github"}
                  </a>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl h-[80vh] overflow-y-scroll">
                    <div>
                      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        The Joke Tax Chronicles
                      </h1>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Once upon a time, in a far-off land, there was a very
                        lazy king who spent all day lounging on his throne. One
                        day, his advisors came to him with a problem: the
                        kingdom was running out of money.
                      </p>
                      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        The King's Plan
                      </h2>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king thought long and hard, and finally came up with{" "}
                        <a
                          href="#"
                          className="font-medium text-primary underline underline-offset-4"
                        >
                          a brilliant plan
                        </a>
                        : he would tax the jokes in the kingdom.
                      </p>
                      <blockquote className="mt-6 border-l-2 pl-6 italic">
                        "After all," he said, "everyone enjoys a good joke, so
                        it's only fair that they should pay for the privilege."
                      </blockquote>
                      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        The Joke Tax
                      </h3>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king's subjects were not amused. They grumbled and
                        complained, but the king was firm:
                      </p>
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>1st level of puns: 5 gold coins</li>
                        <li>2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners : 20 gold coins</li>
                      </ul>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        As a result, people stopped telling jokes, and the
                        kingdom fell into a gloom. But there was one person who
                        refused to let the king's foolishness get him down: a
                        court jester named Jokester.
                      </p>
                      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Jokester's Revolt
                      </h3>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Jokester began sneaking into the castle in the middle of
                        the night and leaving jokes all over the place: under
                        the king's pillow, in his soup, even in the royal
                        toilet. The king was furious, but he couldn't seem to
                        stop Jokester.
                      </p>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        And then, one day, the people of the kingdom discovered
                        that the jokes left by Jokester were so funny that they
                        couldn't help but laugh. And once they started laughing,
                        they couldn't stop.
                      </p>
                      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        The People's Rebellion
                      </h3>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The people of the kingdom, feeling uplifted by the
                        laughter, started to tell jokes and puns again, and soon
                        the entire kingdom was in on the joke.
                      </p>
                      <div className="my-6 w-full overflow-y-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                King's Treasury
                              </th>
                              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                People's happiness
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Empty
                              </td>
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Overflowing
                              </td>
                            </tr>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Modest
                              </td>
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Satisfied
                              </td>
                            </tr>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Full
                              </td>
                              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                Ecstatic
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king, seeing how much happier his subjects were,
                        realized the error of his ways and repealed the joke
                        tax. Jokester was declared a hero, and the kingdom lived
                        happily ever after.
                      </p>
                      <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The moral of the story is: never underestimate the power
                        of a good laugh and always be careful of bad ideas.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground">
                        External Resources
                      </h4>
                      <ul className="mt-2 flex flex-wrap items-center gap-2">
                        {recentWork?.clientInformation?.map((resource) => (
                          <li key={resource?.name}>
                            <a
                              href={resource?.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline capitalize"
                            >
                              {resource?.name || "View Resource"}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-16">
        <Button>See More</Button>
      </div>
    </section>
  );
};

export default Portfolio;
