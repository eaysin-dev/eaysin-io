import { Portfolio } from "@/app/data/portfolio";

import Description from "../../ui/description";
import ExternalResources from "../../ui/external-resources";
import ListGroup from "../../ui/list-group";
import Title from "../../ui/title";
import { keyFeatures, usages } from "./data";
import ProjectUsages from "./project-usages";

const Tuso = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <div>
      <Description>
        Tuso is a robust system issue tracking platform designed to streamline
        the process of reporting, managing, and resolving system issues
        efficiently. With Tuso, users can easily report system issues they
        encounter, while support staff can effectively track, prioritize, and
        resolve these issues in a timely manner. Tuso also includes Remote
        Desktop Protocol (RDP) feature, allowing support staff to establish live
        connections with users&apos; systems to diagnose and resolve issues in
        real-time. The platform provides a user-friendly interface for both
        users and support staff, ensuring seamless communication and
        collaboration throughout the issue resolution process.
      </Description>

      <ListGroup
        title="Key Features"
        description="Tuso offers a range of features designed to streamline issue tracking and resolution:"
        listItems={keyFeatures}
      />

      <ProjectUsages usages={usages} />

      <>
        <Title title="Real-time Ticket Resolution" />={" "}
        <Description>
          Tuso&apos;s integration of Remote Desktop Protocol (RDP) allows
          support staff to resolve issues efficiently by connecting to
          users&apos; systems remotely, diagnosing and fixing problems in
          real-time.
        </Description>
      </>

      <>
        <Title title="Benefits of Using Tuso" />={" "}
        <Description>
          The platform enhances the collaboration between users and support
          staff, ensuring faster issue resolution and improved system
          performance across the board.
        </Description>
        <Description>
          With the real-time connectivity feature and instant notifications,
          everyone stays updated on ticket statuses, resulting in a more
          transparent and accountable issue management process.
        </Description>
      </>

      <ExternalResources resources={portfolio?.externalResource} />
    </div>
  );
};

export default Tuso;
