import { PortfolioDetail } from '@/constant/interfaces';
import { generateUId } from '@/utils/shortid';

export const reactFormInteractionsDocs: PortfolioDetail = {
  id: generateUId(),
  title: 'React Form Interactions — Advanced Form Management',
  identity: 'reactFormInteractions',
  subtitle: 'A React Form State and Validation Library',
  description: [
    'Developed a reusable React library (react-form-interactions) to simplify form state management and validation in React applications. Define comprehensive validation rules for form fields including required fields, minimum/maximum lengths, patterns, and more.',
    'Easily extend with custom validation rules and behaviors tailored to specific application requirements. Designed for seamless integration with React applications using hooks and functional components.',
    'Automatically manage and display error messages associated with form fields based on validation rules.',
  ],
  githubLink: 'https://github.com/eaysin-dev/react-form-interactions',
  liveLink:
    'https://www.npmjs.com/package/react-form-interactions?activeTab=readme',
  clientInformation: {
    date: 'July 07, 2024 (Last Version)',
  },
  duration: 'Date range here',
  organization: 'Your organization or independent project',
  tagline: 'Streamlining form state management and validation.',
  techStack: ['TypeScript', 'React.js'],
  challenges: [
    {
      label: 'Preventing unnecessary re-renders in form management.',
      link: 'https://eaysin-dev.hashnode.dev/case-study-building-react-form-interactions',
      solutions: [
        {
          id: generateUId(),
          text: 'Implemented a debounced validation function to ensure validations run only after a brief delay, preventing excessive re-renders during rapid input changes.',
        },
      ],
    },
    {
      label: 'Handling real-time form state updates efficiently.',
      link: 'https://eaysin-dev.hashnode.dev/case-study-building-react-form-interactions',
      solutions: [
        {
          id: generateUId(),
          text: 'Utilized a setFieldValue function that integrates debounced validation, allowing for responsive form updates without immediate re-rendering.',
        },
      ],
    },
    {
      label: 'Optimizing validation error messaging.',
      link: 'https://eaysin-dev.hashnode.dev/case-study-building-react-form-interactions',
      solutions: [
        {
          id: generateUId(),
          text: 'Updated error messages only if there was a change in validation results to prevent flickering and maintain UI stability.',
        },
      ],
    },
    {
      label: 'Implementing comprehensive form reset functionality.',
      link: 'https://eaysin-dev.hashnode.dev/case-study-building-react-form-interactions',
      solutions: [
        {
          id: generateUId(),
          text: 'Developed resetFormState and resetFormField functions to efficiently reset the form to its initial values.',
        },
      ],
    },
  ],
  responsibilities: [],
  blogCaseStudies: {
    title: 'Blog & Case Studies',
    links: [
      {
        id: generateUId(),
        label: 'React Documentation',
        url: 'https://reactjs.org/docs/getting-started.html',
      },
    ],
  },
  overview:
    'React Form Interactions is an advanced form management library designed to simplify state management, validation, and user interactions in React applications. It offers a comprehensive suite of features to handle form states, validation rules, and dynamic interactions seamlessly, making it easier for developers to implement efficient form solutions.',
  keyFeatures: [
    {
      id: generateUId(),
      label: 'Form State Management',
      description:
        'Manage and maintain the state of form values, errors, and touched fields, providing a clear and consistent state across all form interactions.',
    },
    {
      id: generateUId(),
      label: 'Comprehensive Validation Rules',
      description:
        'Define validation rules for form fields, including required fields, length constraints, patterns, and custom validation logic.',
    },
    {
      id: generateUId(),
      label: 'Dynamic Validation',
      description:
        "Support dynamic validation rules that adjust based on other form values or external conditions, enhancing the form's responsiveness.",
    },
    {
      id: generateUId(),
      label: 'Asynchronous Validation',
      description:
        'Implement asynchronous validation for form fields using custom functions or promises to handle complex validation scenarios.',
    },
    {
      id: generateUId(),
      label: 'User Interaction Handling',
      description:
        'Manage user interactions like onChange and onBlur events for form fields, allowing real-time feedback and dynamic updates.',
    },
    {
      id: generateUId(),
      label: 'Submission Management',
      description:
        'Handle form submissions with integrated validation to prevent invalid data from being submitted, ensuring data integrity.',
    },
    {
      id: generateUId(),
      label: 'Form Reset Functionality',
      description:
        'Provide options to reset form fields to their initial values, clearing validation errors and restoring the default state.',
    },
    {
      id: generateUId(),
      label: 'Extensibility',
      description:
        'Easily extend the library with custom validation rules and behaviors tailored to meet specific application requirements.',
    },
    {
      id: generateUId(),
      label: 'React Integration',
      description:
        'Designed for seamless integration with React applications using hooks and functional components, promoting best practices.',
    },
    {
      id: generateUId(),
      label: 'Automatic Error Messaging',
      description:
        'Automatically manage and display error messages associated with form fields based on defined validation rules, enhancing user experience.',
    },
  ],
  installationStep: [
    {
      id: generateUId(),
      title: 'Install the Package',
      description:
        'To install the useFormInteractions package, use npm or yarn.',
      commands: [
        {
          id: generateUId(),
          command: 'npm install useFormInteractions',
          description: 'Install using npm',
        },
        {
          id: generateUId(),
          command: 'yarn add useFormInteractions',
          description: 'Install using yarn',
        },
      ],
    },
    {
      id: generateUId(),
      title: 'Import and Use the Hook',
      description:
        'Once installed, you can import and use the hook in your components.',
      commands: [
        {
          id: generateUId(),
          command: `import { useFormInteractions } from 'useFormInteractions';`,
        },
      ],
    },
  ],
  usage: [
    {
      id: generateUId(),
      title: 'Basic Usage Example',
      description:
        'This example demonstrates how to set up a form with validation using the useFormInteractions hook.',
      codeSnippet: `
import React from 'react';
import { useFormInteractions, ValidationRules } from 'useFormInteractions';

interface FormData {
  email: string;
  password: string;
}

const initialValues: FormData = {
  email: '',
  password: '',
};

const validationRulesConfig: ValidationRules<FormData> = {
  email: [{ required: true, email: true }],
  password: [{ required: true, minLength: 8 }],
};

const FormWithValidationExample = () => {
  const {
    formState,
    handleChange,
    handleBlur,
    handleSubmit,
    resetFormState,
    isValid,
    isSubmitting,
  } = useFormInteractions<FormData>(initialValues, validationRulesConfig);

  const onSubmitHandler = (data: FormData) => {
    console.log(data);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="error">{formState.errors.email}</div>
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="error">{formState.errors.password}</div>
      </div>

      <button type="submit" disabled={!isValid || isSubmitting}>
        Submit
      </button>
      <button type="button" onClick={resetFormState}>
        Reset
      </button>
    </form>
  );
};

export default FormWithValidationExample;
      `,
    },
  ],
  api: [
    {
      id: generateUId(),
      label: 'Parameters',
      description: '',
      data: [
        {
          id: generateUId(),
          label: 'initialValues',
          description: 'Initial values for the form fields.',
        },
        {
          id: generateUId(),
          label: 'validationRulesConfig',
          description: 'Validation rules for each form field.',
        },
      ],
    },
    {
      id: generateUId(),
      label: 'Returns',
      description:
        'An object with methods and properties for managing form state.',
      data: [
        {
          id: generateUId(),
          label: 'formState',
          description:
            'Object with values, errors, and touched properties representing current form state',
        },
        {
          id: generateUId(),
          label: 'setFieldValue',
          description:
            "Function to update a specific field's value in the form state.",
        },

        {
          id: generateUId(),
          label: 'handleChange',
          description:
            'Function to handle changes in form field values. Can accept a callback to interact with the changed value.',
        },
        {
          id: generateUId(),
          label: 'handleBlur',
          description:
            'Function to handle blur events on form fields. Can accept a callback to interact with the blurred value.',
        },
        {
          id: generateUId(),
          label: 'handleSubmit',
          description: 'Function to handle form submission with validation.',
        },
        {
          id: generateUId(),
          label: 'resetFormField',
          description:
            "Function to reset a specific field's value and errors to its initial state.",
        },
        {
          id: generateUId(),
          label: 'resetFormState',
          description:
            'Function to reset all form values and errors to their initial state.',
        },
        {
          id: generateUId(),
          label: 'isValid',
          description:
            'Boolean indicating if the entire form is currently valid based on validation rules.',
        },
        {
          id: generateUId(),
          label: 'setErrors',
          description:
            'Function to manually set validation errors for specific fields.',
        },
        {
          id: generateUId(),
          label: 'setTouched',
          description:
            'Function to manually set the touched state for specific fields.',
        },
        {
          id: generateUId(),
          label: 'isSubmitting',
          description:
            'Boolean indicating if the form is currently being submitted.',
        },
        {
          id: generateUId(),
          label: 'setSubmitting',
          description:
            'Function to manually set the submitting state of the form.',
        },
      ],
    },
  ],
  validationRules: {
    'Basic Validation': [
      'required: Field must have a value.',
      'nullable: Field can be null or undefined.',
      'optional: Field is not required.',
      'allowEmpty: Field can be empty ("").',
    ],
    'Text Validation': [
      'maxLength: Maximum length of input.',
      'minLength: Minimum length of input.',
      'pattern: Regular expression pattern for validation.',
      'email: Must be a valid email format.',
      'numeric: Must be a numeric value.',
      'alphanumeric: Must be alphanumeric.',
    ],
    'String Manipulation': [
      'trim: Remove leading and trailing whitespace.',
      'lowercase: Convert input to lowercase.',
      'uppercase: Convert input to uppercase.',
      'startsWith: Input must start with a specified string.',
      'endsWith: Input must end with a specified string.',
    ],
    'Specialized Input': [
      'phone: Must be a valid phone number format.',
      'creditCard: Must be a valid credit card number.',
      'password: Must meet password strength criteria.',
      'fieldMatch: Must match another field in the form (keyof T).',
    ],
    'Numeric Constraints': [
      'maxValue: Maximum numeric value allowed.',
      'minValue: Minimum numeric value allowed.',
      'lessThan: Must be less than a specified number.',
      'moreThan: Must be more than a specified number.',
      'positive: Must be a positive number.',
      'negative: Must be a negative number.',
      'integer: Must be an integer.',
      'truncate: Truncate decimal places.',
      'round: Round to a specified precision.',
    ],
    'Date and Time': [
      'date: Must be a valid date format.',
      'dateTime: Must be a valid date and time format.',
      'time: Additional options for time validation (hourFormat, mode).',
    ],
    'File Validation': [
      'fileType: Allowed file types.',
      'fileSize: Maximum file size in bytes.',
    ],
    'Boolean and URL': [
      'boolean: Must be a boolean value (true or false).',
      'url: Must be a valid URL format.',
      'checkboxRequired: Checkbox must be checked.',
    ],
    'Form Interactions': [
      'asyncCheck: Asynchronously validate using a custom function.',
      'custom: Synchronous or asynchronous custom validation function.',
    ],
  },
  lessons:
    'Gained insights into building robust form management solutions with emphasis on performance and user experience.',
  improvements:
    'Optimized validation logic and improved the overall user interface for enhanced usability.',
  externalResource: {
    title: 'React Form Interactions Resources',
    links: [
      {
        id: generateUId(),
        label: 'Npm',
        url: 'https://www.npmjs.com/package/react-form-interactions',
      },
    ],
  },
};
