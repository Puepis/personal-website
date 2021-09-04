import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col">
      <hr className="mt-10 mb-6" />
      <p className="mb-6 text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center">
        © {new Date().getFullYear()} Philips Xu
      </p>
    </footer>
  );
};

export default Footer;
