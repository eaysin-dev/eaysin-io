import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProps) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

export default Description;
