import { accounts } from "@/app/data/accounts";
import { AiFillGithub } from "react-icons/ai";
import { FaBlog, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 h-screen">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Eaysin Arafat
            </span>{" "}
            — Frontend Developer
          </h1>{" "}
        </main>

        <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I&apos;m dedicated to solving problems both in coding and in everyday
          life. Self-taught and driven, I embrace each technology as a unique
          philosophy, specializing in user-centric web applications with a focus
          on performance and scalability.
        </p>

        <p className="md:text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I prioritize clean code and real-time, efficient user experiences to
          ensure every project exceeds expectations.
        </p>

        <div className="flex justify-center lg:justify-start flex-wrap gap-3">
          <a
            rel="noreferrer noopener"
            href={accounts?.github}
            target="_blank"
            className={`flex items-center gap-2 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <AiFillGithub size={17} />
            Github
          </a>

          <a
            href={accounts?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href={accounts?.leetCode}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <SiLeetcode size={14} />
            LeetCode
          </a>
          <a
            href={accounts?.hashnode}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FaBlog size={13} />
            Blogs
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
