import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VscThreeBars } from "react-icons/vsc";
import HeaderMenu from "./header-menu";
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="h-full items-center justify-between ">
          <Button variant="outline">
            <VscThreeBars size={16} />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px]">
        <HeaderMenu />
      </SheetContent>
    </Sheet>
  );
}
