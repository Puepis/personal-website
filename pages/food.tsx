import type { NextPage } from "next";
import PrimaryLayout from "../layouts/PrimaryLayout";

const Home: NextPage = () => {
  return (
    <PrimaryLayout>
      <p className="text-lg text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6">
        My little corner where I document my cooking progress!
      </p>
    </PrimaryLayout>
  );
};

export default Home;
