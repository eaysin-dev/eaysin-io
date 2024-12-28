import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

// Define a type for the size prop
type DialogSize = "small" | "medium" | "large";

const sizeClasses: Record<DialogSize, string> = {
  small: "max-w-[calc(100%-2rem)]",
  medium: "max-w-[calc(100%-2rem)] md:max-w-5xl",
  large: "max-w-[calc(100%-2rem)] lg:max-w-6xl",
};

const PortfolioDialog = ({
  buttonText,
  title,
  children,
  size = "medium", // Default size is medium
}: {
  buttonText?: string;
  title?: string;
  children: ReactNode;
  size?: DialogSize; // Accept size prop
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-2" size={"sm"}>
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent
        className={`h-[80vh] overflow-y-scroll ${sizeClasses[size]}`}
      >
        <div>
          {title && (
            <h1 className="scroll-m-20 mb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {title}
            </h1>
          )}

          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDialog;
