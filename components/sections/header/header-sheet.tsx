"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import Navigation from "./navigation";

export const HeaderSheet = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to control the sheet

  const closeSheet = () => {
    setIsOpen(false); // Function to close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="h-full items-center justify-between ">
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            <VscThreeBars size={16} />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px]">
        <Navigation onMenuItemClick={closeSheet} />
      </SheetContent>
    </Sheet>
  );
};
