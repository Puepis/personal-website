import type { NextPage } from "next";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Bio from "../components/Bio";
import SocialBar from "../components/SocialBar";

const Home: NextPage = () => {
  return (
    <PrimaryLayout>
      <Bio />
      <SocialBar />
    </PrimaryLayout>
  );
};

export default Home;
