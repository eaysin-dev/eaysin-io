import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiThreedotjs } from "react-icons/si";
import HeaderMenu from "./header-menu";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex h-full items-center justify-between w-full px-10 mt-5">
          <SiThreedotjs />
          <Button variant="outline">Open</Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px] z-[9999]">
        <HeaderMenu />
      </SheetContent>
    </Sheet>
  );
}
