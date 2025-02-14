import { ToastAction } from '@/components/ui/toast';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from './use-toast';

export type ContactErrorType = {
  name?: string;
  email?: string;
  message?: string;
};

const useContact = (onSuccess: () => void) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputError, setInputError] = useState<ContactErrorType | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const name = target.name.value.trim();
    const email = target.email.value.trim();
    const message = target.message.value.trim();

    // Simple validation
    const errors: ContactErrorType = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!validateEmail(email)) errors.email = 'Invalid email address';
    if (!message) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setInputError(errors);
      return;
    }

    if (!formRef.current) return;

    setIsLoading(true);

    // Send email using emailjs
    emailjs
      .sendForm(SERVICE_ID!, TEMPLATE_ID!, formRef.current, PUBLIC_KEY!)
      .then(
        (response) => {
          if (response.status === 200) {
            toast({
              title: 'Success!',
              description:
                "Your message has been sent successfully. I'll get back to you soon.",
              action: <ToastAction altText='Ok'>Okay</ToastAction>,
            });
            setInputError(null);
            formRef.current?.reset();

            onSuccess();
          }
        },
        (error) => {
          console.error(error);
          toast({
            title: 'Error',
            description:
              'An error occurred while sending your message. Please try again later.',
            action: <ToastAction altText='Retry'>Retry</ToastAction>,
          });
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { formRef, inputError, onSubmit, isLoading };
};

export default useContact;
