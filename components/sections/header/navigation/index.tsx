import { Button } from "../../../ui/button";
import { ModeToggle } from "../../../ui/mode-toggle";
import { NavigationMenu } from "./navigation-menu";

interface NavigationProps {
  onMenuItemClick: () => void; // Prop type for the menu item click handler
}

const Navigation = ({ onMenuItemClick }: NavigationProps) => {
  const handleDownloadCV = () => {
    window.open(
      "https://docs.google.com/document/d/1DPLPuUrLCye0FXjnJ7Xp2mKNY5AAYalAq-IaOkRuI7k/edit?usp=sharing",
      "_blank", // Opens in a new tab
      "noopener,noreferrer" // Security features
    );
  };

  return (
    <div className="header-content h-20 relative flex flex-col md:flex-row items-center justify-between w-full gap-3 px-8 md:px-6 lg:px-7 xl:px-36">
      <NavigationMenu onMenuItemClick={onMenuItemClick} />

      <div className="flex items-start md:items-center flex-col md:flex-row gap-3">
        <Button onClick={handleDownloadCV}>Download CV</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
