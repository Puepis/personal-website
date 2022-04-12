import type { GetStaticProps, NextPage } from "next";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";
import { IPhotoRepository } from "../src/interfaces/IPhotoRepository";
import { NotionPhotoRepository } from "../src/services/NotionPhotoRepository";
import { FoodEntry } from "../src/types/FoodEntry";

type Props = {
  items: FoodEntry[];
};

const FoodPage: NextPage<Props> = ({ items }: Props) => {
  return (
    <Layout title="Food">
      <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6 mb-5">
        I love making food. Here are some of my latest creations!
      </p>
      <ImageGallery items={items} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const photoRepository: IPhotoRepository = new NotionPhotoRepository();
  const items = await photoRepository.getAllEntries();

  return {
    props: {
      items
    },
    revalidate: 2 * 60 * 60 // use ISR to refetch photos every 2 hours
  };
};

export default FoodPage;
