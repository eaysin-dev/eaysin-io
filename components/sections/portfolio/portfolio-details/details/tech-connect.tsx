import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uuid } from "@/utils/shortid";
import Description from "../ui/description";
import ListGroup from "../ui/list-group";

const TechConnect = () => {
  const responsibilities = [
    "Led the development of the Timesheets and Request Module, ensuring smooth integration with backend APIs for real-time data updates.",
    "Implemented a secure authentication system, including role-based permissions to protect sensitive employee data and restrict access to authorized personnel.",
    "Worked closely with the backend team to establish secure data handling practices, improving platform reliability and performance.",
    "Designed and optimized the user interface of the dashboard, providing managers with detailed insights into team productivity and performance.",
    "Collaborated with the product team to ensure that new features aligned with business requirements and user needs.",
  ];

  const technologies = [
    {
      id: uuid(),
      label: "React.js",
      description:
        "Used for building the platform's dynamic and interactive user interface.",
    },
    {
      id: uuid(),
      label: "TypeScript",
      description:
        "Ensured type safety and minimized runtime errors, improving the code's maintainability.",
    },
    {
      id: uuid(),
      label: "Redux Toolkit",
      description:
        "Implemented for state management, ensuring seamless data flow between components and improved handling of API requests.",
    },
  ];

  const keyFeatures = [
    {
      id: uuid(),
      label: "Timesheets Module",
      description:
        "Allows employees to log work hours and managers to approve them in real-time.",
    },
    {
      id: uuid(),
      label: "Request Module",
      description:
        "Enables employees to submit requests (e.g., leave, reimbursements) and managers to review and process them efficiently.",
    },
    {
      id: uuid(),
      label: "Role-Based Authentication",
      description:
        "Ensures that only authorized users can access sensitive information, with different permissions for managers and employees.",
    },
    {
      id: uuid(),
      label: "Performance Dashboard",
      description:
        "Provides managers with insights into team productivity, including detailed performance metrics and activity logs.",
    },
  ];

  const benefits = [
    "Facilitates seamless communication between employees and managers, improving internal workflows and transparency.",
    "Enhances data security with role-based authentication, ensuring sensitive information is only accessible to authorized users.",
    "Increases productivity with real-time data synchronization, enabling immediate updates to timesheets and requests.",
    "Streamlines employee performance tracking and reporting, providing valuable insights for decision-making.",
  ];

  return (
    <div>
      {/* Project Overview */}
      <Description>
        TechConnect is an employee management platform that helps organizations
        track employee performance, generate reports, and manage internal
        communication efficiently. It provides a detailed dashboard for managers
        to monitor team productivity, facilitating better decision-making and
        employee engagement.
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
        description="TechConnect offers a range of features designed to streamline employee management and improve organizational productivity:"
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
        description="The following technologies were instrumental in building and enhancing the TechConnect platform:"
        isCard
        listItems={technologies.map((item) => ({
          id: uuid(),
          label: item.label,
          description: item.description,
        }))}
      />

      {/* Benefits of Using TechConnect */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Benefits of Using TechConnect</CardTitle>
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
          TechConnect streamlines the employee management process by offering
          tools for real-time data synchronization, role-based authentication,
          and performance tracking. The platform helps organizations improve
          internal communication and ensure more efficient task completion.
        </CardContent>
      </Card>
    </div>
  );
};

export default TechConnect;
