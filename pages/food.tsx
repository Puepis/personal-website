import type { GetServerSideProps, NextPage } from "next";
import ImageCard from "../components/ImageCard";
import MainLayout from "../layouts/MainLayout";
import { fetchEntries } from "../src/services/airtable";
import { FoodEntry } from "../src/types/FoodEntry";

type Props = {
  items: FoodEntry[];
};

const FoodPage: NextPage<Props> = ({ items }: Props) => {
  return (
    <MainLayout>
      <p className="text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6 mb-5">
        My little corner where I document my cooking progress!
      </p>

      <div className="w-full grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <ImageCard key={index} item={item} />
        ))}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetchEntries();
  return {
    props: {
      items: res
    }
  };
};

export default FoodPage;
