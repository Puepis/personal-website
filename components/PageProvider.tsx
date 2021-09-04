import { createContext, ReactNode, useState } from "react";

type PageInfo = {
  pages: { name: string; href: string }[];
  page: number;
  direction: number;
  paginate: (newPage: string) => void;
};

type Props = {
  children: ReactNode;
};

export const PageContext = createContext<PageInfo | undefined>(undefined!);

const PageProvider = ({ children }: Props) => {
  const pages = [
    {
      name: "about",
      href: "/"
    },
    {
      name: "food",
      href: "/food"
    }
  ];
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newPage: string) => {
    const index = pages.findIndex((page) => page.name === newPage);
    const offset = index - page;
    setPage([page + offset, offset]);
  };

  return <PageContext.Provider value={{ pages, page, direction, paginate }}>{children}</PageContext.Provider>;
};

export default PageProvider;
