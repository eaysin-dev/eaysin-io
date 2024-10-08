import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uuid } from "@/utils/shortid";
import Description from "../ui/description";
import ListGroup from "../ui/list-group";

const FileDrive = () => {
  const responsibilities = [
    "Led the full-stack development of FileDrive, from initial design to deployment, ensuring a seamless file management experience for users.",
    "Designed and implemented the Organization Management feature, allowing users to create and manage teams with role-based access to files.",
    "Integrated secure file upload functionality, ensuring that files are stored and shared securely across teams and individuals.",
    "Worked with Convex to manage backend services, ensuring efficient data handling and retrieval for user file storage.",
    "Integrated Clerk for authentication, enabling secure access and role-based permissions across the platform.",
  ];

  const technologies = [
    {
      id: uuid(),
      label: "React.js",
      description:
        "Built the platform's dynamic and interactive user interface.",
    },
    {
      id: uuid(),
      label: "Next.js",
      description:
        "Enabled server-side rendering and optimized performance for large-scale file management.",
    },
    {
      id: uuid(),
      label: "Convex",
      description:
        "Used for backend services to efficiently manage file storage and retrieval.",
    },
    {
      id: uuid(),
      label: "Clerk",
      description:
        "Integrated authentication and role-based access to ensure secure user management.",
    },
    {
      id: uuid(),
      label: "Tailwind CSS",
      description:
        "Provided a modern, responsive design for an intuitive user experience.",
    },
  ];

  const keyFeatures = [
    {
      id: uuid(),
      label: "Secure File Upload",
      description:
        "Allows users to securely upload and share files such as PDFs, images, and more.",
    },
    {
      id: uuid(),
      label: "Organization Management",
      description:
        "Create and manage organizations, assigning team members with role-based permissions.",
    },
    {
      id: uuid(),
      label: "Role-Based Access Control",
      description:
        "Ensures only authorized users have access to specific files, based on their roles within the organization.",
    },
    {
      id: uuid(),
      label: "Real-Time Collaboration",
      description:
        "Enables users to share and manage files in real-time with their team members.",
    },
    {
      id: uuid(),
      label: "Responsive Design",
      description:
        "Offers a fully responsive layout for seamless use on any device.",
    },
  ];

  const benefits = [
    "Enables efficient file sharing and management within teams or organizations, improving workflow and collaboration.",
    "Offers secure file handling with role-based access, ensuring sensitive information is protected at all times.",
    "Facilitates real-time collaboration, making it easier for teams to stay organized and productive.",
    "Provides an intuitive and responsive user interface, ensuring a smooth experience across desktop and mobile devices.",
    "Optimizes performance with Next.js server-side rendering and efficient backend management using Convex.",
  ];

  return (
    <div>
      {/* Project Overview */}
      <Description>
        FileDrive is a comprehensive file management platform that allows
        individuals and organizations to securely store, share, and manage
        files. It enables users to create organizations and assign role-based
        permissions, ensuring a streamlined and secure workflow for team
        collaboration.
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
        description="FileDrive offers a range of features designed to streamline file management for individuals and teams:"
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
        description="The following technologies were used in building and optimizing the FileDrive platform:"
        isCard
        listItems={technologies.map((item) => ({
          id: uuid(),
          label: item.label,
          description: item.description,
        }))}
      />

      {/* Benefits of Using FileDrive */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Benefits of Using FileDrive</CardTitle>
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
          FileDrive simplifies file management by offering a secure, intuitive
          platform for teams and organizations. It supports real-time
          collaboration and provides a responsive, modern interface that adapts
          to various devices.
        </CardContent>
      </Card>
    </div>
  );
};

export default FileDrive;
