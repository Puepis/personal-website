import type { NextPage } from "next";
import ImageCard from "../components/ImageCard";
import PrimaryLayout from "../layouts/PrimaryLayout";
import FoodEntry from "../src/types/FoodEntry";

const entry: FoodEntry = {
  dateCreated: 10101,
  title: "Penang Char Kway Teow",
  imagePath: "/food/ckt.png",
  description: "Lorem ipsum dolor sit amet, consectetur",
  source: "test.com"
};

const FoodPage: NextPage = () => {
  return (
    <PrimaryLayout>
      <p className="text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center leading-6 mb-5">
        My little corner where I document my cooking progress!
      </p>

      <div className="w-full grid grid-cols-3 gap-4">
        <ImageCard item={entry} />
        <ImageCard item={entry} />
        <ImageCard item={entry} />
        <ImageCard item={entry} />
        <ImageCard item={entry} />
        <ImageCard item={entry} />
      </div>
    </PrimaryLayout>
  );
};

export default FoodPage;
