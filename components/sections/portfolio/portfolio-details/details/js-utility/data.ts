import { uuid } from "@/utils/shortid";
import { ProjectDetails } from "../carepro/data";

export const jsUtilityDocs: ProjectDetails = {
  id: uuid(),
  title: "JavaScript Utility Functions Library",
  duration: "Ongoing",
  organization: "Personal Project",
  tagline:
    "A comprehensive library of utility functions for efficient JavaScript development.",
  overview:
    "This repository contains a collection of utility functions organized into modules for common tasks in JavaScript. Whether you're working on a small project or a large-scale application, these functions can help streamline your development process.",
  keyFeatures: [
    {
      id: uuid(),
      label: "Modular Design",
      description:
        "The utility functions are organized into modules for easy import and usage.",
    },
    {
      id: uuid(),
      label: "Comprehensive Coverage",
      description:
        "Includes utility functions for arrays, objects, strings, and more.",
    },
    {
      id: uuid(),
      label: "Well-Documented",
      description: "Each function is thoroughly documented for ease of use.",
    },
    {
      id: uuid(),
      label: "Flexible and Reusable",
      description:
        "Functions are designed to be flexible and reusable across projects.",
    },
  ],
  usage: [
    {
      id: uuid(),
      title: "Import Utility Functions",
      description: "Import the utility functions into your project files.",
      codeSnippet: "const utils = require('./index');",
    },
  ],
  techStack: ["JavaScript", "Node.js", "Git"],
  challenges: [
    {
      label: "Performance Optimization",
      solutions: [
        {
          id: uuid(),
          text: "Implemented binary search for optimizing query performance.",
        },
      ],
    },
  ],
  api: [
    {
      id: "api-1",
      label: "Array Functions",
      description:
        "Provides a set of utility functions for array manipulation.",
      data: [
        {
          id: uuid(),
          label: "head(array)",
          description: "Returns the first element of an array.",
        },
        {
          id: uuid(),
          label: "indexOf(array, value)",
          description:
            "Returns the index of the first occurrence of a value in an array.",
        },
        {
          id: uuid(),
          label: "last(array)",
          description: "Returns the last element of an array.",
        },
        {
          id: uuid(),
          label: "nth(array, n)",
          description: "Returns the nth element of an array.",
        },
        {
          id: uuid(),
          label: "pull(array, ...values)",
          description: "Removes all given values from an array.",
        },
        {
          id: uuid(),
          label: "union(array1, array2)",
          description:
            "Creates an array of unique values from all given arrays.",
        },
        {
          id: uuid(),
          label: "sortedIndex(array, value)",
          description:
            "Returns the index at which the value should be inserted into the array to maintain order.",
        },
        {
          id: uuid(),
          label: "sortedUniq(array)",
          description:
            "Returns a new array of unique values from the sorted array.",
        },
        {
          id: uuid(),
          label: "take(array, n)",
          description:
            "Creates a slice of the array with n elements taken from the beginning.",
        },
        {
          id: uuid(),
          label: "reverse(array)",
          description: "Reverses the elements of an array.",
        },
        {
          id: uuid(),
          label: "remove(array, predicate)",
          description:
            "Removes elements from an array that satisfy the predicate.",
        },
        {
          id: uuid(),
          label: "slice(array, start, end)",
          description: "Returns a shallow copy of a portion of an array.",
        },
      ],
    },
    {
      id: "api-2",
      label: "Object Functions",
      description: "Provides utility functions for object manipulation.",
      data: [
        {
          id: uuid(),
          label: "assign(target, ...sources)",
          description:
            "Assigns properties from source objects to the target object.",
        },
        {
          id: uuid(),
          label: "update(object, path, value)",
          description: "Updates the value at the specified path of an object.",
        },
        {
          id: uuid(),
          label: "fromPairs(pairs)",
          description: "Creates an object from an array of key-value pairs.",
        },
        {
          id: uuid(),
          label: "flatten(object)",
          description:
            "Flattens the object into a single level, combining keys.",
        },
        {
          id: uuid(),
          label: "concat(object1, object2)",
          description: "Concatenates two or more objects.",
        },
        {
          id: uuid(),
          label: "difference(object1, object2)",
          description: "Creates an object excluding the specified properties.",
        },
        {
          id: uuid(),
          label: "compact(object)",
          description: "Removes falsey values from an object.",
        },
        {
          id: uuid(),
          label: "keys(object)",
          description:
            "Returns an array of the object's own enumerable property names.",
        },
        {
          id: uuid(),
          label: "values(object)",
          description:
            "Returns an array of the object's own enumerable property values.",
        },
        {
          id: uuid(),
          label: "flattenDeep(object)",
          description: "Recursively flattens the object to a single level.",
        },
      ],
    },
  ],
  images: [
    {
      id: uuid(),
      src: "https://example.com/screenshot1.png",
      alt: "Screenshot of the utility functions in action",
    },
  ],
  responsibilities: [
    {
      id: uuid(),
      label: "Function Development",
      description:
        "Developed various utility functions for common JavaScript tasks.",
    },
    {
      id: uuid(),
      label: "Documentation",
      description: "Created thorough documentation for each utility function.",
    },
  ],
  installationStep: [
    {
      id: uuid(),
      title: "Clone the Repository",
      description: "Clone the repository to your local machine.",
      commands: [
        {
          id: uuid(),
          command: "git clone https://github.com/eaysin-arafat/js-utility.git",
          description: "Clone using Git",
        },
      ],
    },
    {
      id: uuid(),
      title: "Install Dependencies",
      description:
        "Navigate to the project directory and install dependencies.",
      commands: [
        {
          id: uuid(),
          command: "npm install",
          description: "Install using npm",
        },
        {
          id: uuid(),
          command: "yarn install",
          description: "Install using yarn",
        },
      ],
    },
  ],
  lessons:
    "Learned the importance of thorough testing and documentation for utility functions.",
  improvements:
    "Plan to optimize performance for large datasets in future updates.",
  blogCaseStudies: {
    title: "Blog and Case Studies",
    links: [
      {
        id: uuid(),
        label: "Understanding Utility Functions",
        url: "https://example.com/utility-functions",
      },
      {
        id: uuid(),
        label: "Optimizing JavaScript Performance",
        url: "https://example.com/performance-optimization",
      },
    ],
  },
  externalResource: {
    title: "External Resources",
    links: [
      {
        id: uuid(),
        label: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
      },
      {
        id: uuid(),
        label: "JavaScript Info",
        url: "https://javascript.info/",
      },
    ],
  },
};
