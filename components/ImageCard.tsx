import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { FoodEntry } from "../src/types/FoodEntry";
import FadeInImage from "./FadeInImage";
import Hyperlink from "./Hyperlink";

type Props = {
  item: FoodEntry;
};

const Details: FunctionComponent<Props> = ({ item }: Props) => {
  const separator = " • ";
  const ingredients = item?.description?.split(",").map((x) => x.trim());

  return (
    <div className="mt-3">
      {/* <p className="text-sm text-light-secondary-text dark:text-white dark:text-opacity-70">
        {item.dateCreated.toLocaleDateString("en-US")}
      </p> */}
      <p className="mt-2 text-lg leading-6 font-semibold">{item.title.toLowerCase()}</p>
      {ingredients && (
        <p className="mt-2 text-sm text-light-secondary-text dark:text-white dark:text-opacity-70">
          {ingredients.join(separator)}
        </p>
      )}
      {item.source != null && (
        <Hyperlink href={item.source} className=" inline-block mt-2 text-sm ">
          source
        </Hyperlink>
      )}
    </div>
  );
};

const ImageCard: FunctionComponent<Props> = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout className={isOpen ? "mb-6 sm:mb-6" : "mb-4"}>
      <motion.div layout className="rounded-lg overflow-hidden hover:opacity-80" onClick={toggleOpen}>
        <FadeInImage item={item} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Details item={item} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default ImageCard;
