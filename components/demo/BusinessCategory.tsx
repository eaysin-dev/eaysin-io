"use client";

import Image from "next/image";
import { useState } from "react";
import BadgesItem from "../ui/badge-item";

export default function BusinessCategories() {
  // State for controlling the modal visibility
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="portfolio" className="s-portfolio">
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

              <p className="mt-3 text-xl lg:text-6xl leading-7 text-white font-serif uppercase">
                Unearthing History{" "}
              </p>
              <h2 className="mt-3 text-lg font-light text-zinc-500 lg:text-2xl">
                Join us in exploring the depths of inner adventures and the
                intricacies of the human mind and emotions.{" "}
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
      </section>
    </>
  );
}
