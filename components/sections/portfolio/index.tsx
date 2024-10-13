"use client";

import React from "react";
import SectionHeader from "../../ui/section-header";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { portfolioDetails, PortfolioDetails } from "./portfolio-details";
import PortfolioItem from "./portfolio-item";

const Portfolio = () => {
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
    <section id="recent-works" className="section-container">
      <SectionHeader
        title="Recent Works"
        description="Here are some of my recent projects and contributions. Check them out!"
        dataNum="02"
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

export default Portfolio;
