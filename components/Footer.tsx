import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <hr className="mt-10 mb-6" />
      <p className="text-base text-center">© {new Date().getFullYear()} Philips Xu</p>
    </div>
  );
};

export default Footer;
