import Image from "next/image";
import { FunctionComponent } from "react";
import { FoodEntry } from "../src/types/FoodEntry";
import Hyperlink from "./Hyperlink";

type Props = {
  item: FoodEntry;
};

const ImageCard: FunctionComponent<Props> = ({ item }: Props) => {
  const { url, width, height } = item.image;
  return (
    <div className="mb-6 sm:mb-8">
      <Image src={url} width={width} height={height} layout="responsive" objectFit="cover" alt={item.title} />
      <div className="mt-3">
        <p className="text-sm text-light-secondary-text dark:text-white dark:text-opacity-70">
          {item.dateCreated.toLocaleDateString("en-US")}
        </p>
        <p className="mt-2 text-lg leading-6 font-semibold">{item.title}</p>
        {item.description != null && (
          <p className="mt-2 text-sm text-light-secondary-text dark:text-white dark:text-opacity-70">
            {item.description}
          </p>
        )}
        {item.source != null && (
          <Hyperlink href={item.source} className=" inline-block mt-2 text-sm ">
            Recipe Source
          </Hyperlink>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
