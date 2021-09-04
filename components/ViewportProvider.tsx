import { createContext, ReactNode, useEffect, useState } from "react";

type Viewport = {
  width: number;
  height: number;
};

type Props = {
  children: ReactNode;
};

export const ViewportContext = createContext<Viewport | undefined>(undefined!);

const ViewportProvider = ({ children }: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
};

export default ViewportProvider;
