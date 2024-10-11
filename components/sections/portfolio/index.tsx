"use client";

import { portfolio } from "@/app/data/portfolio";
import React from "react";
import SectionHeader from "../../ui/section-header";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import PortfolioItem from "./portfolio-item";

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState("all");

  const filterProjects = (category: string) => {
    if (category === "all") {
      return portfolio;
    }
    return portfolio.filter((work) => work.category === category);
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
        {filteredWorks.map((recentWork) => {
          return <PortfolioItem portfolio={recentWork} key={recentWork?.id} />;
        })}
      </div>
      {/* <div className="flex items-center justify-center w-full mt-16">
        <Button>See More</Button>
      </div> */}
    </section>
  );
};

export default Portfolio;
