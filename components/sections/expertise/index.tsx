import SectionHeader from "../../ui/section-header";
import Accordion from "./accordion";

const Expertise = () => {
  return (
    <section id="expertise" className="section-container relative">
      <div className="">
        <SectionHeader
          title="Expertise"
          description="I excel in developing high-performance web applications focused on user experience."
          dataNum={"02"}
        />

        <div className="mt-10">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
