import { Badge } from "./ui/badge";
import { Typography } from "./ui/typography";

const Hero = () => {
  return (
    <section
      id="hero"
      className="s-hero h-screen relative w-full overflow-hidden z-10"
    >
      {/* <div className="absolute top-0 left-0 w-full h-full"></div> */}

      <div className="h-full relative px-7 md:px-20 xl:px-52 text-center pt-[30vh] md:pt-[35vh] lg:pt-[37vh]">
        <Typography variant="display1">
          Hello, I'm Eaysin Arafat, a Frontend Developer with Extensive React
          and Next.js Experience
          <span className="absolute top-[-1.2rem] left-0 h-[2px] w-[4.5rem] bg-[#2280de]"></span>
        </Typography>

        <ul className="flex flex-wrap items-center gap-4 py-7 mt-3">
          <li>
            <Badge variant={"default"} className="text-sm cursor-pointer">
              GitHub
            </Badge>
          </li>
          <li>
            <Badge className="text-sm">Linkedin</Badge>
          </li>
          <li>
            <Badge className="text-sm">Twitter</Badge>
          </li>
          <li>
            <Badge className="text-sm">My Case Studies & Blogs</Badge>
          </li>
        </ul>
      </div>

      <div className="relative bottom-5 right-2">
        <a
          href="#about"
          className="smoothscroll absolute bottom-[1.5rem] right-9 flex items-center justify-center bg-black rounded-full size-[3rem] hover:bg-[#2280de] transition-all"
        >
          {/* <MdArrowDownward className="text-white" size={25} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
