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
        I really love food. Here are some of my favourites!
      </p>
      <ImageGallery items={items} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items = await getAllEntries();

  // TODO: this doesn't work
  // const fetchPlaceholder = async (item: FoodEntry) => {
  //   const { base64 } = await getPlaiceholder(item.image.url);
  //   return { ...item, image: { ...item.image, placeholder: base64 } };
  // };

  // const fetchPlaceholders = Promise.all(items.map((item) => fetchPlaceholder(item)));
  // items = await fetchPlaceholders;
  return {
    props: {
      items
    }
  };
};

export default FoodPage;
