interface TitleProps {
  title: string;
  variant?: "default" | "title2";
}

const Title = ({ title, variant = "default" }: TitleProps) => {
  const baseStyles =
    "mt-10 scroll-m-20 border-b pb-2 font-semibold tracking-tight transition-colors first:mt-0";
  const variantStyles = variant === "default" ? "text-3xl" : "text-lg";

  return <h2 className={`${baseStyles} ${variantStyles}`}>{title}</h2>;
};

export default Title;
