import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Bio from "../components/Bio";
import SocialBar from "../components/SocialBar";

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <Bio />
      <SocialBar />
    </MainLayout>
  );
};

export default AboutPage;
