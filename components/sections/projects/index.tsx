"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { portfolioDetails, PortfolioDetails } from "./portfolio-details";
import PortfolioItem from "./portfolio-item";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const portfolioData: PortfolioDetails[] = Object.values(
    portfolioDetails(true)
  );

  const filterProjects = (category: string): PortfolioDetails[] => {
    if (category === "all") return portfolioData;

    return portfolioData.filter((work) => work.category === category);
  };

  const filteredWorks = filterProjects(activeTab);

  return (
    <section id="projects" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Recent{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works
        </span>
      </h2>

      <div className="flex items-center justify-center mt-12 md:mt-0 mb-2 md:mb-5">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-[400px]"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="fullStack">Full Stack</TabsTrigger>
            <TabsTrigger value="reactJs">React Js</TabsTrigger>
            <TabsTrigger value="nextJs">Next Js</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 pt-10">
        {filteredWorks.map((recentWork: PortfolioDetails) => {
          return <PortfolioItem portfolio={recentWork} key={recentWork.id} />;
        })}
      </div>
    </section>
  );
};
