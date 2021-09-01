import Image from "next/image";
import { FunctionComponent } from "react";
import { FoodEntry } from "../src/types/FoodEntry";

type Props = {
  item: FoodEntry;
};

const ImageCard: FunctionComponent<Props> = ({ item }: Props) => {
  const { url, width, height } = item.image;
  return (
    <div className="mb-5">
      <Image src={url} width={width} height={height} layout="responsive" objectFit="cover" />
      <div className="mt-3">
        <p className="text-sm text-light-secondary-text dark:text-white dark:text-opacity-70">
          {item.dateCreated.toLocaleDateString("en-US")}
        </p>
        <p className="mt-2 text-lg leading-6 font-semibold">{item.title}</p>
        <p className="mt-3 text-sm">{item.description}</p>
        {item.source != null && (
          <a
            href={item.source}
            className="inline-block mt-3 text-sm underline text-light-hyperlink text-opacity-50 dark:text-dark-hyperlink dark:text-opacity-50"
          >
            Recipe Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
