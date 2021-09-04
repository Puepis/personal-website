import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { usePaginator } from "../src/utils/hooks";

type Props = {
  title: string;
  children: ReactNode;
};

const variants = {
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  enter: (direction: number) => {
    return {
      opacity: 1,
      x: direction > 0 ? 100 : -100
    };
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      opacity: 0,
      x: direction < 0 ? 100 : -100
    };
  }
};

const Layout: FunctionComponent<Props> = ({ title, children }: Props) => {
  const meta = {
    title: "Philips Xu",
    description: `A third year computer science student studying at the University of Waterloo`
  };
  const { direction } = usePaginator();

  return (
    <div>
      <Head>
        <title>{`${title} | ${meta.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta charSet="UTF-8" />
      </Head>
      <motion.main
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        variants={variants}
        transition={{
          x: { type: "linear" }
        }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
