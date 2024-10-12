import { PortfolioDetail } from "@/constant/interfaces";
import { uuid } from "@/utils/shortid";

export const ecommarceDocs: PortfolioDetail = {
  id: uuid(),
  identity: "ecommarce",
  subtitle:
    "an online destination where buyers shop for goods and sellers offer products and services.",
  clientInformation: {
    company: "Blackrock IT Solutions",
    date: "May 14, 2023",
  },
  description: [
    "I have led the development of the eCommerce platform that utilizes JavaScript, React.js, Redux Toolkit and Tailwind CSS. Adapted functionalities of easy product browsing, cart management and secure checkout systems. Utilized the Redux Toolkit for state management to ensure proper data flow and the system stability. Using Tailwind CSS to design an interface with a modern, reactive and responsive look and feel.",
    "Employed JavaScript for user interactions to ensure that the entire platform is dynamic and user-friendly.",
  ],
  githubLink: "https://github.com/eaysin-arafat/ecommarce_client.git",
  liveLink: "https://ecommarce-client.vercel.app/",

  title: "E-Commerce Platform",
  duration: "Mar 2024 - May 2024",
  organization: "Personal Project",
  tagline:
    "Simplified online shopping experience with integrated state management.",
  overview:
    "A full-stack e-commerce application built with React, Redux Toolkit, and JSON Server. The platform offers a seamless shopping experience with authentication, product listings, cart management, and order processing. It features client-side routing, state management using Redux, and JSON Server for a backend simulation.",
  keyFeatures: [
    {
      id: uuid(),
      label: "Product Management",
      description: "Browse, filter, and search products across categories.",
    },
    {
      id: uuid(),
      label: "User Authentication",
      description:
        "Secure login and registration with JSON Server authentication.",
    },
    {
      id: uuid(),
      label: "Cart and Checkout",
      description:
        "Add products to the cart and proceed with a streamlined checkout process.",
    },
    {
      id: uuid(),
      label: "Order Tracking",
      description: "Track your order status post-purchase.",
    },
    {
      id: uuid(),
      label: "Responsive Design",
      description:
        "Responsive UI optimized for different devices and screen sizes.",
    },
    {
      id: uuid(),
      label: "State Management with Redux Toolkit",
      description:
        "Centralized state management for cart, products, and user sessions.",
    },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Vite",
    "JSON Server",
    "React Router DOM",
    "Axios",
  ],
  challenges: [
    {
      label: "Building a scalable state management system.",
      solutions: [
        {
          id: uuid(),
          text: "Used Redux Toolkit to efficiently manage global state for products, cart, and user authentication.",
        },
        {
          id: uuid(),
          text: "Implemented lazy loading to improve performance on product page loading.",
        },
      ],
    },
  ],
  images: [
    {
      id: uuid(),
      alt: "E-commerce platform home page",
      src: "/portfolio/ecommarce-platform/01.png",
    },
    {
      id: uuid(),
      alt: "Product details page",
      src: "/portfolio/ecommarce-platform/02.png",
    },
  ],
  role: "Full-Stack Developer",
  responsibilities: [
    {
      id: uuid(),
      description:
        "Implemented front-end UI components for product listings, cart management, and user authentication.",
    },
    {
      id: uuid(),
      description:
        "Integrated Redux Toolkit to manage global application state for user sessions and products.",
    },
    {
      id: uuid(),
      description:
        "Built JSON Server to simulate a backend API for product data, user login, and order management.",
    },
    {
      id: uuid(),
      description:
        "Designed and developed a responsive layout using Tailwind CSS.",
    },
    {
      id: uuid(),
      description: "Handled client-side routing using React Router DOM.",
    },
  ],
  installationStep: [
    {
      id: uuid(),
      title: "Clone the Repository",
      description:
        "To get a local copy of the project, clone the repository using Git.",
      commands: [
        {
          id: uuid(),
          command:
            "git clone https://github.com/your-username/ecommerce-app.git",
          description: "Clone the repository to your local machine",
        },
      ],
    },
    {
      id: uuid(),
      title: "Navigate to the Project Directory",
      description: "Change your working directory to the project folder.",
      commands: [
        {
          id: uuid(),
          command: "cd ecommerce-app",
          description: "Move into the ecommerce-app directory",
        },
      ],
    },
    {
      id: uuid(),
      title: "Install Dependencies",
      description:
        "Install the necessary packages for the project using npm or yarn.",
      commands: [
        {
          id: uuid(),
          command: "yarn install",
          description: "Install using Yarn",
        },
        {
          id: uuid(),
          command: "npm install",
          description: "Install using npm",
        },
      ],
    },
    {
      id: uuid(),
      title: "Start the Development Server",
      description:
        "Run the development server to view the application in your browser.",
      commands: [
        {
          id: uuid(),
          command: "yarn dev",
          description: "Start the Vite development server",
        },
      ],
    },
    {
      id: uuid(),
      title: "Start the JSON Server",
      description: "Run the JSON Server to simulate the backend API.",
      commands: [
        {
          id: uuid(),
          command: "yarn db",
          description: "Start the JSON Server with authentication",
        },
      ],
    },
  ],
  lessons:
    "Gained deep insights into handling global state using Redux Toolkit and improving performance with lazy loading and code splitting.",
  improvements:
    "Future enhancements could include a real backend API with persistent user sessions and real-time inventory updates.",
  blogCaseStudies: {
    title: "Blog & Case Studies",
    links: [
      {
        id: uuid(),
        label: "Redux Toolkit Documentation",
        url: "https://redux-toolkit.js.org/introduction/getting-started",
      },
      {
        id: uuid(),
        label: "React Router Documentation",
        url: "https://reactrouter.com/web/guides/quick-start",
      },
      {
        id: uuid(),
        label: "Tailwind CSS Documentation",
        url: "https://tailwindcss.com/docs/installation",
      },
    ],
  },
  externalResource: {
    title: "External Resource",
    links: [
      {
        id: uuid(),
        label: "JSON Server Documentation",
        url: "https://github.com/typicode/json-server",
      },
      {
        id: uuid(),
        label: "Vite Documentation",
        url: "https://vitejs.dev/guide/",
      },
    ],
  },
};
