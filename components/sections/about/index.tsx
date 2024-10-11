import SectionHeader from "../../ui/section-header";
import { Typography } from "../../ui/typography";
import Career from "../expertise/career";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="">
        <SectionHeader
          title="About Me"
          description="I'm a frontend developer specializing in creating user-centric web applications."
          dataNum="01"
        />

        <div className="space-y-4">
          <Typography variant="h2">Profile</Typography>

          <Typography variant="p" className="">
            I am a frontend developer focused on building performant and
            scalable web applications, with a strong emphasis on clean code and
            enhancing user experience through real-time interactions. I also
            have experience with backend development, particularly in
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

      <div className="mt-36 ">
        <Career />
      </div>
    </section>
  );
};

export default About;
