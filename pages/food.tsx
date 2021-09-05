import type { GetStaticProps, NextPage } from "next";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";
import { getAllEntries } from "../src/services/airtable";
import { FoodEntry } from "../src/types/FoodEntry";

type Props = {
  items: FoodEntry[];
};

const FoodPage: NextPage<Props> = ({ items }: Props) => {
  return (
    <Layout title="Food">
      <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6 mb-5">
        My little corner where I document my cooking!
      </p>
      <ImageGallery items={items} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items = await getAllEntries();
  return {
    props: {
      items
    }
  };
};

export default FoodPage;
