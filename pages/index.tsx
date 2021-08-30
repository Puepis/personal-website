import type { NextPage } from "next";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Bio from "../components/Bio";
import SocialBar from "../components/SocialBar";

const AboutPage: NextPage = () => {
  return (
    <PrimaryLayout>
      <Bio />
      <SocialBar />
    </PrimaryLayout>
  );
};

export default AboutPage;
