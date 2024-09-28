import { ReactNode } from "react";

interface BadgesItemProps {
  children: ReactNode;
  outline?: boolean;
  roundedFull?: boolean;
  roundedLg?: boolean;
  roundedNone?: boolean;
  roundedSm?: boolean;
  roundedMd?: boolean;
  bgOpacity?: boolean;
  className?: string;
}

const BadgesItem = ({
  children,
  outline,
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
  bgOpacity,
  className,
}: BadgesItemProps) => {
  return (
    <span
      className={`inline-block rounded py-2 px-4 text-xl whitespace-nowrap leading-7 tracking-widest font-light ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-black/10`)
            } border-white text-black`
          : `bg-white ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-black/10`)
            } text-black`
      } ${bgOpacity && "bg-black/10"} ${className}`}
    >
      {children}
    </span>
  );
};

export default BadgesItem;
