import Image from "next/image";
import { Badge } from "../../../ui/badge";
import { Button } from "../../../ui/button";
import { Typography } from "../../../ui/typography";

const ProjectItem = () => {
  return (
    <article className="py-7 sm:py-5 grid grid-cols-1 lg:grid-cols-7 gap-5">
      <div className="lg:col-span-2">
        <Image
          className="object-cover object-center grayscale h-full w-full"
          src={"/images/portfolio/woodcraft.jpg"}
          alt="Unearthing History"
          height={80}
          width={1061}
        />
      </div>
      <div className="flex flex-col items-start md:col-span-5 justify-between">
        <div>
          <div className="flex items-center gap-1">
            <Typography variant="lead">Blackrock It Solutions_</Typography>

            <Typography variant="lead">February 24, 2022</Typography>
          </div>

          <Typography
            variant="h2"
            className="uppercase text-[#2280de] font-medium tracking-wider mt-1.5"
          >
            Unearthing History{" "}
          </Typography>
          <Typography variant="muted" className="mt-3 text-lg  text-zinc-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            molestias vel doloribus saepe odit placeat ullam sunt quas hic
            incidunt inventore porro dolor, iste culpa delectus debitis illum.
            Minus, possimus.
          </Typography>

          <div className="flex flex-wrap gap-2 pt-3">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React Js</Badge>
            <Badge>Redux Js</Badge>
          </div>
        </div>

        <div className="mt-3">
          <Button>Explore Project</Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
