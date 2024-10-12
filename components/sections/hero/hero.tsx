import { accounts } from "@/app/data/accounts";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="s-hero h-screen relative w-full overflow-hidden z-10"
    >
      <div className="h-full relative px-5 md:px-6 lg:px-7 xl:px-36 pt-[16vh] sm:pt-[22vh] md:pt-[25vh] lg:pt-[24vh] xl:pt-[28vh] 2xl:pt-[32vh]">
        <Typography
          variant="display1"
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight md:leading-snug "
        >
          I’m <span className="text-baseColor">Eaysin Arafat</span>, a frontend
          developer dedicated to solving problems in both coding and everyday
          life.
        </Typography>

        <p className="mt-4 text-sm md:text-base lg:text-lg font-medium text-muted-foreground italic">
          My programming journey is self-taught, allowing me to learn and think
          critically without formal courses. I see each technology as a unique
          philosophy and strive to embrace it.
        </p>

        <p className="mt-4 text-sm md:text-base lg:text-lg font-normal text-muted-foreground">
          I specialize in building{" "}
          <span className="font-semibold text-baseColor">
            user-centric web applications
          </span>{" "}
          focused on performance and scalability. I prioritize{" "}
          <span className="font-semibold">clean code</span> and efficient,
          real-time user experiences.
        </p>

        <div className="mt-6 text-xs md:text-sm text-muted-foreground">
          <span className="font-semibold">Where I’ve Worked:</span> Excel
          Technologies Ltd., Blackrock IT Solutions
        </div>
        <div className="mt-1 text-xs md:text-sm text-muted-foreground">
          <span className="font-semibold">Technologies I Use:</span> TypeScript,
          React.js, Redux Toolkit, JavaScript, Tailwind CSS, SCSS
        </div>
        <div className="mt-1 text-xs md:text-sm text-muted-foreground">
          <span className="font-semibold">Projects I Love:</span> Carepro, TUSO,
          HybridChart, TechConnect, react-form-interactions
        </div>

        <ul className="flex flex-wrap items-center gap-4 py-7 mt-3">
          <li>
            <Link href={accounts?.github} target="_blank">
              <Badge
                variant="default"
                className="text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                GitHub
              </Badge>
            </Link>
          </li>
          <li>
            <Link href={accounts?.linkedin} target="_blank">
              <Badge className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                LinkedIn
              </Badge>
            </Link>
          </li>
          <li>
            <Link href={accounts?.leetCode} target="_blank">
              <Badge className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                LeetCode
              </Badge>
            </Link>
          </li>
          <li>
            <Link href={accounts?.twitter} target="_blank">
              <Badge className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                Twitter
              </Badge>
            </Link>
          </li>
          <li>
            <Link href={"https://eaysin-arafat.hashnode.dev/"} target="_blank">
              <Badge className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                My Case Studies & Blogs
              </Badge>
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="relative bottom-5 right-2">
        <a
          href="#about"
          className="smoothscroll absolute bottom-[1.5rem] right-9 flex items-center justify-center bg-black rounded-full size-[3rem] hover:bg-baseColor transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            className="text-background"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
