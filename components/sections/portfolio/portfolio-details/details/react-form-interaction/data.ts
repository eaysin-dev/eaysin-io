import { ListItem } from "@/app/data/portfolio";
import { uuid } from "@/utils/shortid";

export const keyFeatures: ListItem[] = [
  {
    id: uuid(),
    label: "Form State Management",
    description:
      "Manage and maintain state for form values, errors, and touched fields.",
  },
  {
    id: uuid(),
    label: "Validation Rules",
    description:
      "Define comprehensive validation rules for form fields including required fields, minimum/maximum lengths, patterns, and more.",
  },
  {
    id: uuid(),
    label: "Dynamic Validation",
    description:
      "Support dynamic validation rules that depend on other form values or external conditions.",
  },
  {
    id: uuid(),
    label: "Async Validation",
    description:
      "Asynchronously validate form fields using custom validation functions or promises",
  },
  {
    id: uuid(),
    label: "Field Interactions",
    description:
      "Handle user interactions such as onChange and onBlur events for form fields.",
  },
  {
    id: uuid(),
    label: "Submission Handling",
    description:
      "Manage form submission with integrated validation to prevent invalid data from being submitted.",
  },
  {
    id: uuid(),
    label: "Form Reset",
    description:
      "Provide functionality to reset form fields to their initial values and clear validation errors.",
  },
  {
    id: uuid(),
    label: "Extensible",
    description:
      "Easily extend with custom validation rules and behaviors tailored to specific application requirements.",
  },
  {
    id: uuid(),
    label: "Integration with React",
    description:
      "Designed for seamless integration with React applications using hooks and functional components.",
  },
  {
    id: uuid(),
    label: "Error Messaging",
    description:
      "Automatically manage and display error messages associated with form fields based on validation rules.",
  },
];

export const inputs: ListItem[] = [
  {
    id: uuid(),
    label: "initialValues",
    description: "Object containing initial values for form fields.",
  },
  {
    id: uuid(),
    label: "validationRulesConfig",
    description:
      "Configuration object defining validation rules for each form field.",
  },
];

export const returns: ListItem[] = [
  {
    id: uuid(),
    label: "formState",
    description:
      "Object with values, errors, and touched properties representing current form state",
  },
  {
    id: uuid(),
    label: "setFieldValue",
    description:
      "Function to update a specific field's value in the form state.",
  },

  {
    id: uuid(),
    label: "handleChange",
    description:
      "Function to handle changes in form field values. Can accept a callback to interact with the changed value.",
  },
  {
    id: uuid(),
    label: "handleBlur",
    description:
      "Function to handle blur events on form fields. Can accept a callback to interact with the blurred value.",
  },
  {
    id: uuid(),
    label: "handleSubmit",
    description: "Function to handle form submission with validation.",
  },
  {
    id: uuid(),
    label: "resetFormField",
    description:
      "Function to reset a specific field's value and errors to its initial state.",
  },
  {
    id: uuid(),
    label: "resetFormState",
    description:
      "Function to reset all form values and errors to their initial state.",
  },
  {
    id: uuid(),
    label: "isValid",
    description:
      "Boolean indicating if the entire form is currently valid based on validation rules.",
  },
  {
    id: uuid(),
    label: "setErrors",
    description:
      "Function to manually set validation errors for specific fields.",
  },
  {
    id: uuid(),
    label: "setTouched",
    description:
      "Function to manually set the touched state for specific fields.",
  },
  {
    id: uuid(),
    label: "isSubmitting",
    description: "Boolean indicating if the form is currently being submitted.",
  },
  {
    id: uuid(),
    label: "setSubmitting",
    description: "Function to manually set the submitting state of the form.",
  },
];


export const validationFeatures = {
  "Basic Validation": [
    "required: Field must have a value.",
    "nullable: Field can be null or undefined.",
    "optional: Field is not required.",
    'allowEmpty: Field can be empty ("").',
  ],
  "Text Validation": [
    "maxLength: Maximum length of input.",
    "minLength: Minimum length of input.",
    "pattern: Regular expression pattern for validation.",
    "email: Must be a valid email format.",
    "numeric: Must be a numeric value.",
    "alphanumeric: Must be alphanumeric.",
  ],
  "String Manipulation": [
    "trim: Remove leading and trailing whitespace.",
    "lowercase: Convert input to lowercase.",
    "uppercase: Convert input to uppercase.",
    "startsWith: Input must start with a specified string.",
    "endsWith: Input must end with a specified string.",
  ],
  "Specialized Input": [
    "phone: Must be a valid phone number format.",
    "creditCard: Must be a valid credit card number.",
    "password: Must meet password strength criteria.",
    "fieldMatch: Must match another field in the form (keyof T).",
  ],
  "Numeric Constraints": [
    "maxValue: Maximum numeric value allowed.",
    "minValue: Minimum numeric value allowed.",
    "lessThan: Must be less than a specified number.",
    "moreThan: Must be more than a specified number.",
    "positive: Must be a positive number.",
    "negative: Must be a negative number.",
    "integer: Must be an integer.",
    "truncate: Truncate decimal places.",
    "round: Round to a specified precision.",
  ],
  "Date and Time": [
    "date: Must be a valid date format.",
    "dateTime: Must be a valid date and time format.",
    "time: Additional options for time validation (hourFormat, mode).",
  ],
  "File Validation": [
    "fileType: Allowed file types.",
    "fileSize: Maximum file size in bytes.",
  ],
  "Boolean and URL": [
    "boolean: Must be a boolean value (true or false).",
    "url: Must be a valid URL format.",
    "checkboxRequired: Checkbox must be checked.",
  ],
  "Form Interactions": [
    "asyncCheck: Asynchronously validate using a custom function.",
    "custom: Synchronous or asynchronous custom validation function.",
  ],
};
