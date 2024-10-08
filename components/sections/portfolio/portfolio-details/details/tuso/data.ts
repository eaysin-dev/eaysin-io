import { ListItem } from "@/app/data/portfolio";
import createIssueTicket from "@/public/portfolio/tuso/usage/create-issue-ticket.png";
import followTicket from "@/public/portfolio/tuso/usage/follow-up-on-specific-ticket.png";
import login from "@/public/portfolio/tuso/usage/login.png";
import resolveTicket from "@/public/portfolio/tuso/usage/resolve-ticket-through-RDP.png";
import { uuid } from "@/utils/shortid";

export const keyFeatures: ListItem[] = [
  {
    id: uuid(),
    label: "User Authentication",
    description:
      "Tuso features a secure user authentication system, allowing users to register, log in, and manage their accounts securely. This ensures that only authorized users can access the platform and report system issues.",
  },
  {
    id: uuid(),
    label: "Intuitive Ticket Creation",
    description:
      "Users can create tickets to report system issues effortlessly. The ticket creation process is user-friendly, allowing users to provide detailed descriptions, screenshots, and other relevant information to help support staff understand and address the reported issues effectively.",
  },
  {
    id: uuid(),
    label: "Efficient Ticket Management",
    description:
      "Support staff can manage tickets efficiently through the intuitive support dashboard. They can view, assign, prioritize, and track tickets based on their status and severity, ensuring that critical issues are addressed promptly.",
  },
  {
    id: uuid(),
    label: "Streamlined Ticket Resolution",
    description:
      "Support staff can communicate with users, provide updates, and resolve reported issues directly within the platform. This streamlines the issue resolution process and ensures clear communication between users and support staff throughout the entire process.",
  },
  {
    id: uuid(),
    label: "Real-time Notifications",
    description:
      "Tuso features a real-time notification system that notifies users and support staff of any updates or changes to their tickets. This helps users stay informed about the progress of their reported issues and enables support staff to respond promptly to new tickets and updates.",
  },
  {
    id: uuid(),
    label: "Remote Desktop Protocol (RDP)",
    description:
      "Tuso includes an integrated Remote Desktop Protocol (RDP) feature, allowing support staff to establish live connections with users' systems. This enables support staff to diagnose and resolve issues more effectively by accessing users' systems in real-time, providing immediate assistance and troubleshooting.",
  },
  {
    id: uuid(),
    label: "Administrative Features",
    description:
      "Admins have access to administrative features, allowing them to manage users, configure system settings, and monitor system performance. This ensures that the platform operates smoothly and efficiently.",
  },
];

export const usages = [
  {
    title: "Logging in to Tuso",
    description:
      "Users need to log in to the Tuso system using their credentials to access the platform.",
    image: login,
    alt: "Login Page",
  },
  {
    title: "Create Issue Ticket",
    description:
      "Users can create issue tickets to report system issues they encounter.",
    image: createIssueTicket,
    alt: "Create Issue Ticket",
  },
  {
    title: "Follow up on Specific Ticket",
    description:
      "Users can follow up on specific tickets to track the progress of the issue resolution.",
    image: followTicket,
    alt: "Follow Up Ticket",
  },
  {
    title: "Resolve Ticket Through RDP",
    description:
      "Support staff can resolve tickets by establishing live connections with users' systems using the Remote Desktop Protocol (RDP) feature.",
    image: resolveTicket,
    alt: "Resolve Ticket Through RDP",
  },
];
