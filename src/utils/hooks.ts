import { ViewportContext } from "../../components/ViewportProvider";
import { useContext } from "react";

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext)!;
  return { width, height };
};
