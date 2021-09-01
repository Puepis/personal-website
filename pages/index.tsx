import type { NextPage } from "next";
import WebLayout from "../layouts/WebLayout";
import Bio from "../components/Bio";
import SocialBar from "../components/SocialBar";

const AboutPage: NextPage = () => {
  return (
    <WebLayout title="About">
      <Bio />
      <SocialBar />
    </WebLayout>
  );
};

export default AboutPage;
