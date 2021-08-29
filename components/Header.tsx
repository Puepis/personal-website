import { FunctionComponent } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Header: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <Image src="/avatar.svg" width="125" height="125" />
      <h1 className="font-bold text-5xl text-center my-4">Philips Xu</h1>
      <Navbar
        pages={[
          { name: "about", route: "/" },
          { name: "food", route: "/food" }
        ]}
      />
      <hr className="mt-8 mb-6" />
    </div>
  );
};

export default Header;
