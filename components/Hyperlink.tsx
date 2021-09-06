import { FunctionComponent, ReactNode } from "react";

type Props = {
  href: string;
  className: string;
  children: ReactNode;
};

const Hyperlink: FunctionComponent<Props> = ({ href, className, children }: Props) => {
  return (
    <a
      className={"underline text-light-hyperlink dark:text-dark-hyperlink dark:text-opacity-50 " + className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Hyperlink;
