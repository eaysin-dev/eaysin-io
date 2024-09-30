import { cn } from "@/lib/utils";
import React from "react";

// Define the available variants
const variants = {
  display1:
    "text-[2.5rem] sm:text-[2.9rem] md:text-[3.5rem] lg:text-[4.3rem] text-start font-normal leading-[1.257] mt-0 relative",
  subhead:
    "text-[1.6rem] leading-[1.286] uppercase font-semibold tracking-[0.16em] mt-0 mb-[6rem] text-[#2280de]",
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 ",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  inlineCode:
    "relative rounded bg-muted px-[1rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  error: "text-red-500 mt-1.5 text-sm font-medium",
};

// Define the Typography component with a variant prop
type TypographyProps = {
  variant: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  children,
}) => {
  const Component =
    variant === "inlineCode"
      ? "code"
      : variant === "blockquote"
      ? "blockquote"
      : "p";

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};
