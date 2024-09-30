import createArray from "@/utils/create-array";
import SectionHeader from "./ui/section-header";
import { Typography } from "./ui/typography";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="s-about__section s-about__section--profile">
        <div className="">
          <SectionHeader
            title="About Me"
            description="I'm the kind of person who isn't afraid of challenges."
            dataNum="01"
          />

          <div className="space-y-4">
            <Typography variant="h2">Profile</Typography>

            <Typography variant="large" className="">
              In consectetuer turpis ut velit. Praesent metus tellus, elementum
              eu, semper a, adipiscing nec, purus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; In ac
              dui quis mi consectetuer lacinia. Fusce neque. Curabitur nisi.
              Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
              eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget,
              imperdiet nec, imperdiet iaculis, ipsum. Maecenas egestas arcu
              quis ligula mattis placerat. Suspendisse pulvinar, augue ac
              venenatis condimentum, sem libero volutpat nibh, nec pellentesque
              velit pede quis nunc.
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

        <div className="row block-900-full grid md:grid-cols-2 gap-5 pt-7">
          {createArray(2).map((item) => (
            <div className="column" key={item}>
              <div className="border-t border-[#b3c2c1] py-7 space-y-4">
                <div className="">
                  <div className="flex items-center gap-5">
                    <Typography
                      variant="p"
                      className="uppercase tracking-widest"
                    >
                      Google
                    </Typography>
                    <Typography variant="p">Product Designer</Typography>
                  </div>
                  <Typography
                    variant="lead"
                    className="font-extralight uppercase text-base tracking-widest leading-8"
                  >
                    June 2017 - Present
                  </Typography>
                </div>

                <Typography variant="p">
                  Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet
                  nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue
                  blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
