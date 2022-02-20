import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { usePaginator } from "../src/utils/hooks";

type Props = {
  title: string;
  children: ReactNode;
};

const distance = 50;

const variants = {
  center: {
    x: 0,
    opacity: 1
  },
  enter: (direction: number) => {
    return {
      opacity: 0,
      x: direction > 0 ? distance : -distance
    };
  },
  exit: (direction: number) => {
    return {
      opacity: 0,
      x: direction < 0 ? distance : -distance
    };
  }
};

const Layout: FunctionComponent<Props> = ({ title, children }: Props) => {
  const meta = {
    title: "Philips Xu",
    description: `A CS student at UWaterloo interested in building software and all things cooking!`
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
          x: { ease: "easeOut", duration: 0.2 },
          opacity: { duration: 0.15 }
        }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
