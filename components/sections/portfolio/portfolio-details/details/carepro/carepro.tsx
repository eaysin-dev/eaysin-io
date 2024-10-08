import { Portfolio } from "@/app/data/portfolio";
import Description from "../../ui/description";
import ExternalResources from "../../ui/external-resources";
import ListGroup from "../../ui/list-group";
import Title from "../../ui/title";
import { careproFeatures, careproResponsibilities } from "./data";

const Carepro = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <div>
      <Title title="Project Overview" />

      <Description>
        Carepro is a government-sponsored healthcare system designed to
        streamline patient management, treatment tracking, and doctor-patient
        interactions. The platform ensures efficient management of patient
        records, medical treatments, and seamless communication between doctors
        and patients. This project integrates a variety of modular features,
        from department settings to patient admission and specialized medical
        services.
      </Description>

      {/* Key Features */}
      <ListGroup title="Key Features of Carepro" listItems={careproFeatures} />

      <ListGroup
        title="Responsibilities"
        description="As part of the development team, I contributed to several key modules
        within the Carepro system:"
        listItems={careproResponsibilities}
      />

      <ExternalResources resources={portfolio?.externalResource} />
    </div>
  );
};

export default Carepro;
