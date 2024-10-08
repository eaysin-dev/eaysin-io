import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uuid } from "@/utils/shortid";
import Description from "../ui/description";
import ListGroup from "../ui/list-group";

const HybridChart = () => {
  const responsibilities = [
    "Implemented and integrated the scheduling system with the treatment planning module to enhance the efficiency of patient data management.",
    "Optimized the UI for an improved and intuitive user experience, ensuring the platform is easy to navigate for healthcare professionals.",
    "Collaborated closely with the backend team to ensure smooth data flow and synchronization between the frontend and backend systems.",
    "Worked on real-time data updates to enable healthcare providers to stay informed about changes to patient schedules and treatment plans.",
    "Participated in code reviews and contributed to improving code quality and performance optimizations in the platform.",
  ];

  const technologies = [
    {
      id: 1,
      label: "React.js",
      description:
        "Core framework for building the interactive and dynamic user interface.",
    },
    {
      id: 2,
      label: "JavaScript",
      description:
        "Used for business logic and handling frontend interactions.",
    },
    {
      id: 3,
      label: "SCSS",
      description: "Enhanced styling with modular and maintainable CSS.",
    },
  ];

  const keyFeatures = [
    {
      id: 1,
      label: "Real-time Scheduling",
      description:
        "Allows healthcare staff to manage and update patient schedules instantly.",
    },
    {
      id: 2,
      label: "Integrated Treatment Plans",
      description:
        "Seamless integration of patient treatment plans with schedules, ensuring no overlap or conflicts.",
    },
    {
      id: 3,
      label: "Collaboration Tools",
      description:
        "Supports real-time collaboration between healthcare staff for better care coordination.",
    },
  ];

  const benefits = [
    "Improves the workflow of healthcare providers by streamlining patient scheduling and treatment planning.",
    "Facilitates better communication and collaboration between doctors, nurses, and administrative staff.",
    "Enhances data accuracy by providing real-time updates and synchronization between all team members.",
    "Reduces the chances of scheduling conflicts and ensures that patient treatments are executed smoothly and efficiently.",
  ];

  return (
    <div>
      {/* Project Overview */}
      <Description>
        HybridChart is an application designed to help healthcare providers
        manage patient data, schedules, and treatment plans. The goal is to
        improve workflow efficiency by offering real-time collaboration tools
        between healthcare staff. The system allows seamless integration between
        different aspects of patient care, reducing manual effort and improving
        accuracy.
      </Description>

      {/* Responsibilities Section */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>My Responsibilities</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm">
                {responsibility}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Key Features */}
      <ListGroup
        title="Key Features"
        description="HybridChart offers a range of key features that help healthcare professionals streamline their workflow and improve patient care management:"
        isCard
        listItems={keyFeatures.map((item) => ({
          id: uuid(),
          label: item.label,
          description: item.description,
        }))}
      />

      {/* Technologies Used */}
      <ListGroup
        title="Technologies Used"
        description="These technologies were essential in building and optimizing the HybridChart platform:"
        isCard
        listItems={technologies.map((item) => ({
          id: uuid(),
          label: item.label,
          description: item.description,
        }))}
      />

      {/* Benefits of Using HybridChart */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Benefits of Using HybridChart</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm">
                {benefit}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>

        <CardContent>
          HybridChart focuses on improving workflow efficiency by offering tools
          that streamline collaboration between healthcare staff. The
          integration of scheduling systems with treatment planning modules
          enhances real-time updates and task coordination, ensuring patient
          care is delivered effectively and on time.
        </CardContent>
      </Card>
    </div>
  );
};

export default HybridChart;
