import type { NextPage } from "next";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import SocialBar from "../components/SocialBar";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About">
      <Bio />
      <SocialBar />
    </Layout>
  );
};

export default AboutPage;
