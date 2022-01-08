import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { FoodEntry } from "../src/types/FoodEntry";

type Props = {
  item: FoodEntry;
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const FadeInImage: FunctionComponent<Props> = ({ item }: Props) => {
  const { url, width, height } = item.image;
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded]);

  return (
    <motion.div
      initial={"hidden"}
      animate={animationControls}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <Image
        priority
        src={url}
        width={width}
        height={height * 0.85}
        layout="responsive"
        objectFit="cover"
        alt={item.title}
        onLoad={(event) => {
          const target = event.target as HTMLImageElement;

          // next/image uses a 1x1 px image as a placeholder
          // We only want the onLoad event to be triggered on the actual image
          if (target.src.indexOf("data:image/gif;base64") < 0) {
            setIsLoaded(true);
          }
        }}
      />
    </motion.div>
  );
};

export default FadeInImage;
