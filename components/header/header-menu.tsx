import { NavigationMenuDemo } from "../demo/NavigationMenuDemo";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";

const HeaderMenu = () => {
  return (
    <div className="header-content h-20 relative flex flex-col md:flex-row items-center justify-between gap-3 px-10">
      <NavigationMenuDemo />

      <div className="flex items-start md:items-center flex-col md:flex-row gap-5">
        <Button>Download CV</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderMenu;
