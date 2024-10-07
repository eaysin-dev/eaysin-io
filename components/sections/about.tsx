import { careers } from "@/app/data/career";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";
import { Typography } from "../ui/typography";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="s-about__section s-about__section--profile">
        <div className="">
          <SectionHeader
            title="About Me"
            description="I'm a frontend developer specializing in creating user-centric web applications."
            dataNum="01"
          />

          <div className="space-y-4">
            <Typography variant="h2">Profile</Typography>

            <Typography variant="large" className="">
              I am a frontend developer focused on building performant and
              scalable web applications, with a strong emphasis on clean code
              and enhancing user experience through real-time interactions. I
              also have experience with backend development, particularly in
              integrating APIs and managing server-side logic. Additionally, I
              have developed and published an npm package,{" "}
              <Typography variant="inlineCode">
                react-form-interactions
              </Typography>
              , which simplifies form state management and validation for React
              applications.
            </Typography>
          </div>
        </div>
      </div>
      {/* <!-- end s-about__section--profile --> */}

      <div className="mt-36 ">
        <div className="row">
          <div className="column">
            <Typography variant="h2">Career</Typography>
          </div>
        </div>

        <div className="row block-900-full grid lg:grid-cols-2 gap-5 pt-7">
          {careers?.map((career) => (
            <div key={career?.id}>
              <div className="border-t border-[#b3c2c1] pt-7 pb-4 space-y-4">
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <Typography
                        variant="p"
                        className="uppercase font-semibold tracking-wider"
                      >
                        {career?.company}
                      </Typography>
                      {career?.type === "contract" && <Badge>Contract</Badge>}
                    </div>
                    <Typography variant="p" className="font-medium">
                      {career?.role}
                    </Typography>
                  </div>
                  <Typography
                    variant="lead"
                    className="font-extralight uppercase text-base tracking-wider leading-8"
                  >
                    {career?.date}
                  </Typography>
                </div>

                <Typography variant="p">{career?.description}</Typography>
              </div>

              <Button>Visit Website</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
