import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ children }: Props) => {
  const router = useRouter();

  const meta = {
    title: "Philips Xu",
    description: `Third year computer science student at University of Waterloo`,
    image: "/avatar.svg",
    type: "website"
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://yourwebsite.com${router.asPath}`} />
        <link rel="canonical" href={`https://yourwebsite.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Philips Xu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
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

export default MainLayout;
