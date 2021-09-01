import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

type Props = {
  title: string;
  children: ReactNode;
};

const WebLayout: FunctionComponent<Props> = ({ title, children }: Props) => {
  const meta = {
    title: "Philips Xu",
    description: `A third year computer science student studying at the University of Waterloo`
  };

  return (
    <div>
      <Head>
        <title>{`${title} | ${meta.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="w-full">
        <ThemeToggle />
        <div className="max-w-xl mx-auto px-4 pt-28">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default WebLayout;
