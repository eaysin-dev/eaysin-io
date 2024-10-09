import ProjectChallenges from "../../../../ui/project-details/challenges";
import ProjectImprovements from "../../../../ui/project-details/improvements";
import ProjectKeyFeatures from "../../../../ui/project-details/key-features";
import ProjectLessons from "../../../../ui/project-details/lessons";
import ProjectOverview from "../../../../ui/project-details/overview";
import ProjectResources from "../../../../ui/project-details/resources";
import ProjectRole from "../../../../ui/project-details/role";
import ProjectScreenshots from "../../../../ui/project-details/screenshots";
import ProjectTechStack from "../../../../ui/project-details/tech-stack";
import ProjectUsage from "../../../../ui/project-details/usage";
import { tusoDocs } from "./data";

const Tuso = () => {
  return (
    // <div>
    //   <Description>
    //     Tuso is a robust system issue tracking platform designed to streamline
    //     the process of reporting, managing, and resolving system issues
    //     efficiently. With Tuso, users can easily report system issues they
    //     encounter, while support staff can effectively track, prioritize, and
    //     resolve these issues in a timely manner. Tuso also includes Remote
    //     Desktop Protocol (RDP) feature, allowing support staff to establish live
    //     connections with users&apos; systems to diagnose and resolve issues in
    //     real-time. The platform provides a user-friendly interface for both
    //     users and support staff, ensuring seamless communication and
    //     collaboration throughout the issue resolution process.
    //   </Description>

    //   {/* Key Features */}
    //   <ListGroup
    //     title="Key Features"
    //     description="Tuso offers a range of features designed to streamline issue tracking and resolution:"
    //     isCard
    //     listItems={keyFeatures}
    //   />

    //   {/* My Responsibilities Section */}
    //   <Responsibilities />

    //   <ProjectUsages usages={usages} />

    //   {/* Additional Information */}
    //   <Card className="mt-5">
    //     <CardHeader>
    //       <CardTitle>Real-time Ticket Resolution</CardTitle>
    //     </CardHeader>

    //     <CardContent>
    //       Tuso&apos;s integration of Remote Desktop Protocol (RDP) allows
    //       support staff to resolve issues efficiently by connecting to
    //       users&apos; systems remotely, diagnosing and fixing problems in
    //       real-time.
    //     </CardContent>
    //   </Card>

    //   {/* Additional Information */}
    //   <Card className="mt-5">
    //     <CardHeader>
    //       <CardTitle>Benefits of Using Tuso</CardTitle>
    //     </CardHeader>

    //     <CardContent>
    //       <Description>
    //         The platform enhances the collaboration between users and support
    //         staff, ensuring faster issue resolution and improved system
    //         performance across the board.
    //       </Description>
    //       <Description>
    //         With the real-time connectivity feature and instant notifications,
    //         everyone stays updated on ticket statuses, resulting in a more
    //         transparent and accountable issue management process.
    //       </Description>
    //     </CardContent>
    //   </Card>

    //   {/* External Resources */}
    //   <ExternalResources resources={portfolio?.externalResource} />
    // </div>
    <div className="">
      <ProjectOverview
        title={tusoDocs.title}
        duration={tusoDocs.duration}
        organization={tusoDocs.organization}
        tagline={tusoDocs.tagline}
        overview={tusoDocs.overview}
      />
      <ProjectKeyFeatures features={tusoDocs.keyFeatures} />
      <ProjectUsage usages={tusoDocs?.usage || []} />
      <ProjectTechStack techStack={tusoDocs.techStack} />
      <ProjectChallenges challenges={tusoDocs.challenges} />
      <ProjectScreenshots
        screenshots={tusoDocs.images || []}
        isCompanyProject
      />
      <ProjectRole
        role={tusoDocs.role || ""}
        responsibilities={tusoDocs.responsibilities}
      />
      <ProjectLessons lessons={tusoDocs.lessons || ""} />
      <ProjectImprovements improvements={tusoDocs.improvements || ""} />
      <ProjectResources
        title="Blog & Case Studies"
        links={tusoDocs?.blogCaseStudies?.links || []}
      />

      <ProjectResources
        title="External Resource"
        links={tusoDocs.externalResource?.links || []}
      />
    </div>
  );
};

export default Tuso;
