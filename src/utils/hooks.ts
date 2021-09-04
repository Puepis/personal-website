import { ViewportContext } from "../../components/ViewportProvider";
import { useContext } from "react";
import { PageContext } from "../../components/PageProvider";

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext)!;
  return { width, height };
};

export const usePaginator = () => {
  const { pages, page, direction, paginate } = useContext(PageContext)!;
  return { pages, page, direction, paginate };
};
