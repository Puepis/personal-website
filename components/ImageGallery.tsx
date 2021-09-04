import type { NextPage } from "next";
import ImageCard from "../components/ImageCard";
import { FoodEntry } from "../src/types/FoodEntry";
import { useViewport } from "../src/utils/hooks";

type Props = {
  items: FoodEntry[];
};

const ImageGallery: NextPage<Props> = ({ items }: Props) => {
  const { width } = useViewport();
  const numColumns = width < 640 ? 2 : 3;
  const arr = Array.from({ length: numColumns }, (v, i) => i);
  return (
    <footer className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
      {arr.map((_, i) => (
        <footer key={i}>
          {items
            .filter((_, index) => index % numColumns === i)
            .map((item) => (
              <ImageCard key={item.image.id} item={item} />
            ))}
        </footer>
      ))}
    </footer>
  );
};

export default ImageGallery;
