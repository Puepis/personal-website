import type { GetServerSideProps, NextPage } from "next";
import ImageCard from "../components/ImageCard";
import WebLayout from "../layouts/WebLayout";
import { fetchEntries } from "../src/services/airtable";
import { FoodEntry } from "../src/types/FoodEntry";
import { useViewport } from "../src/utils/hooks";

type Props = {
  items: FoodEntry[];
};

const FoodPage: NextPage<Props> = ({ items }: Props) => {
  const { width } = useViewport();
  const numColumns = width < 640 ? 2 : 3;
  const arr = Array.from({ length: numColumns }, (v, i) => i);
  return (
    <WebLayout title="Food">
      <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6 mb-5">
        My little corner where I document my cooking progress!
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
        {arr.map((_, i) => (
          <div key={i}>
            {items
              .filter((_, index) => index % numColumns === i)
              .map((item) => (
                <ImageCard key={item.image.id} item={item} />
              ))}
          </div>
        ))}
      </div>
    </WebLayout>
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
