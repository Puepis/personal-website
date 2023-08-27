import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

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
    }
    // {
    //   name: "food",
    //   href: "/food"
    // }
  ];
  const [[page, direction], setPage] = useState([0, 0]);
  const router = useRouter();
  const currentPath = router.pathname;

  const pageIndex = (href: string) => {
    return pages.findIndex((page) => page.href === href);
  };

  useEffect(() => {
    setPage([pageIndex(currentPath), 0]);
  }, []);

  const paginate = (href: string) => {
    const targetIndex = pageIndex(href);
    const offset = targetIndex - page;
    setPage([targetIndex, offset]);
  };

  return <PageContext.Provider value={{ pages, page, direction, paginate }}>{children}</PageContext.Provider>;
};

export default PageProvider;
