import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

const PortfolioDialog = ({
  buttonText = "Details",
  title,
  children,
}: {
  buttonText?: string;
  title?: string;
  children: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-6xl h-[75vh] overflow-y-scroll">
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
