import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const Responsibilities = () => {
  const responsibilityData = [
    {
      category: "User Management",
      tasks: [
        {
          id: 2,
          label: "Role-Based Access",
          description:
            "Developed role-based access control to manage different permissions.",
        },
        {
          id: 3,
          label: "User Registration",
          description:
            "Created the user registration flow with validation and feedback mechanisms.",
        },
      ],
    },
    {
      category: "Ticketing System",
      tasks: [
        {
          id: 1,
          label: "Ticket Creation",
          description:
            "Developed the ticket creation flow with automatic categorization.",
        },
        {
          id: 2,
          label: "SLA Tracking",
          description: "Integrated SLA tracking to monitor response times.",
        },
        {
          id: 3,
          label: "Notifications",
          description:
            "Implemented real-time notifications for ticket updates.",
        },
      ],
    },
    {
      category: "Dashboard Interface",
      tasks: [
        {
          id: 1,
          label: "Real-time Updates",
          description:
            "Integrated real-time updates for issue tracking and user status.",
        },
        {
          id: 2,
          label: "Data Visualization",
          description:
            "Created interactive charts and graphs for visualizing system performance.",
        },
      ],
    },
    {
      category: "Settings Configuration",
      tasks: [
        {
          id: 1,
          label: "Notification Preferences",
          description: "Enabled customizable notification settings for users.",
        },
        {
          id: 2,
          label: "System Configurations",
          description:
            "Provided users with tools to manage system settings and permissions.",
        },
      ],
    },
  ];

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>My Responsibilities</CardTitle>
        <CardDescription>
          Below are the core modules and features I worked on during the
          development of the Tuso platform. Each area highlights my role in
          implementing and improving the system's functionality.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {/* Map over the responsibility data */}
          {responsibilityData.map((section, index) => (
            <div key={index}>
              <Typography variant="small" className="text-sm">
                {section.category}
              </Typography>

              <ul className="mt-2 list-disc ml-6">
                {section.tasks.map((task) => (
                  <li key={task.id} className="text-sm">
                    <Typography variant="p">
                      {task.label} : {task.description}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Responsibilities;
