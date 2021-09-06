import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { FoodEntry } from "../src/types/FoodEntry";
import Hyperlink from "./Hyperlink";

type Props = {
  item: FoodEntry;
};

const Details: FunctionComponent<Props> = ({ item }: Props) => {
  return (
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
  );
};

const ImageCard: FunctionComponent<Props> = ({ item }: Props) => {
  const { url, width, height } = item.image;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={isOpen ? "mb-6 sm:mb-6" : "mb-4"}>
      <Image src={url} width={width} height={height} layout="responsive" objectFit="cover" alt={item.title} />
      {isOpen && <Details item={item} />}
    </div>
  );
};

export default ImageCard;
