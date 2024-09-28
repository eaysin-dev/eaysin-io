import createArray from "@/utils/create-array";
import Image from "next/image";
import BadgesItem from "./ui/badge-item";

const Portfolio = () => {
  return (
    <section id="portfolio" className="s-portfolio">
      <div className="row s-portfolio__top">
        <div className="column large-6 w-900-stack">
          <div className="section-title" data-num="03">
            <h3 className="h6">Recent Works</h3>
          </div>
        </div>
        <div className="column large-6 w-900-stack">
          <h1 className="display-1">
            Here are some of our projects we done lately. Feel free to check
            them out.
          </h1>
        </div>
      </div>

      <div className="row s-portfolio__list block-large-1-2 block-tab-full">
        {createArray(5).map((item, index) => (
          <article className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Image
                className="object-cover object-center grayscale h-full"
                src={"/images/portfolio/woodcraft.jpg"}
                alt="Unearthing History"
                height={80}
                width={1061}
              />
            </div>
            <div className="flex flex-col items-start md:col-span-3 justify-between">
              <div>
                <div className="flex items-center gap-1">
                  <h1 className="font-mono text-2xl font-bold leading-7 text-zinc-500">
                    Blackrock It Solutions_
                  </h1>

                  <time
                    dateTime="2022-02-24T00:00:00.000Z"
                    className="font-mono text-2xl leading-7 text-zinc-500"
                  >
                    February 24, 2022
                  </time>
                </div>

                <p className="mt-3 text-xl lg:text-6xl leading-7 text-[#2280de] font-serif uppercase">
                  Unearthing History{" "}
                </p>
                <h2 className="mt-3 text-lg font-light text-zinc-500 lg:text-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo molestias vel doloribus saepe odit placeat ullam
                  sunt quas hic incidunt inventore porro dolor, iste culpa
                  delectus debitis illum. Minus, possimus.
                </h2>

                <div className="flex flex-wrap gap-2 pt-5">
                  <BadgesItem roundedFull>JavaScript</BadgesItem>
                  <BadgesItem roundedFull>TypeScript</BadgesItem>
                  <BadgesItem roundedFull>React Js</BadgesItem>
                  <BadgesItem roundedFull>Redux Js</BadgesItem>
                </div>
              </div>

              <div>
                <BadgesItem
                  className="text-2xl font-bold hover:bg-[#2280de] py-3 px-5 hover:text-white transition-all cursor-pointer"
                  roundedNone
                >
                  Explore Project
                </BadgesItem>
              </div>
            </div>
          </article>
        ))}

        <div className="flex items-center justify-center w-full mt-20">
          <button className="btn btn--small hover:bg-[#2280de]">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
