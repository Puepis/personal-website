import { FunctionComponent } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { useViewport } from "../src/utils/hooks";

const Header: FunctionComponent = () => {
  const { width } = useViewport();
  const size = width < 640 ? 100 : 125;
  return (
    <div className="flex flex-col">
      <Image src="/avatar.svg" width={`${size}`} height={`${size}`} />
      <h1 className="font-bold text-center text-4xl sm:text-5xl my-2 sm:my-4">Philips Xu</h1>
      <Navbar
        pages={[
          { name: "about", route: "/" },
          { name: "food", route: "/food" }
        ]}
      />
      <hr className="my-6" />
    </div>
  );
};

export default Header;
