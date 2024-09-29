import createArray from "@/utils/create-array";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Typography } from "./ui/typography";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container mt-48 mb-10">
      <div className="grid grid-cols-2">
        <div className="section-intro mt-12" data-num="03">
          <Typography variant="subhead">Recent Works</Typography>
        </div>
        <Typography variant="h1">
          Here are some of our projects we done lately. Feel free to check them
          out.
        </Typography>
      </div>
      <div className="flex items-center justify-center mt-12 md:mt-0 mb-2 md:mb-5">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="react-js">React Js</TabsTrigger>
            <TabsTrigger value="next-js">Next Js</TabsTrigger>
          </TabsList>
          <TabsContent value="account"></TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 pt-10">
        {createArray(5).map((item, index) => (
          <Card className="border border-muted p-1">
            <CardHeader>
              <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                ullam.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore more about this project.
              </p>

              <div className="flex flex-wrap gap-2 pt-3">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React Js</Badge>
                <Badge>Redux Js</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between space-x-2">
              <Button asChild variant="outline">
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>{" "}
      <div className="flex items-center justify-center w-full mt-16">
        <Button>See More</Button>
      </div>
    </section>
  );
};

export default Portfolio;
