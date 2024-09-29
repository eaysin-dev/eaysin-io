import logo from "@/public/images/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        className="h-9 w-9"
        src={logo}
        height={36}
        width={36}
        alt="Homepage"
      />
    </div>
  );
};

export default Logo;
