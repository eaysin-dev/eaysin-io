"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
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
          <Menu className="cursor-pointer" onClick={() => setIsOpen(true)} />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px]">
        <Navigation onMenuItemClick={closeSheet} />
      </SheetContent>
    </Sheet>
  );
};
