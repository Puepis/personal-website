import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FunctionComponent, useEffect, useState } from "react";

const SocialBar: FunctionComponent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const hoverScale = 1.1;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center justify-center space-x-6 mt-7">
      <a href="mailto:y584xu@uwaterloo.ca" aria-label="Email">
        <motion.svg
          whileHover={{ scale: hoverScale }}
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={theme}
            variants={{
              light: {
                d: "M26.6667 5.16675H5.33341C3.86675 5.16675 2.68008 6.32925 2.68008 7.75008L2.66675 23.2501C2.66675 24.6709 3.86675 25.8334 5.33341 25.8334H26.6667C28.1334 25.8334 29.3334 24.6709 29.3334 23.2501V7.75008C29.3334 6.32925 28.1334 5.16675 26.6667 5.16675ZM26.6667 23.2501H5.33341V10.3334L16.0001 16.7917L26.6667 10.3334V23.2501ZM16.0001 14.2084L5.33341 7.75008H26.6667L16.0001 14.2084Z",
                fill: "#323232"
              },
              dark: {
                d: "M26.6665 5.16675H5.33317C3.8665 5.16675 2.67984 6.32925 2.67984 7.75008L2.6665 23.2501C2.6665 24.6709 3.8665 25.8334 5.33317 25.8334H26.6665C28.1332 25.8334 29.3332 24.6709 29.3332 23.2501V7.75008C29.3332 6.32925 28.1332 5.16675 26.6665 5.16675ZM26.6665 23.2501H5.33317V10.3334L15.9998 16.7917L26.6665 10.3334V23.2501ZM15.9998 14.2084L5.33317 7.75008H26.6665L15.9998 14.2084Z",
                fill: "white",
                fillOpacity: 0.9
              }
            }}
            transition={{ type: "spring", duration: 0.2 }}
          />
        </motion.svg>
      </a>

      <a href="https://www.linkedin.com/in/philips-xu" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <motion.svg
          whileHover={{ scale: hoverScale }}
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={theme}
            variants={{
              light: {
                d: "M4.95001 21H0.274996V6.95625H4.95001V21ZM2.6125 4.9875C1.1 4.9875 0 3.9375 0 2.49375C0 1.05 1.2375 0 2.6125 0C4.125 0 5.225 1.05 5.225 2.49375C5.225 3.9375 4.125 4.9875 2.6125 4.9875ZM22 21H17.325V13.3875C17.325 11.1563 16.3625 10.5 14.9875 10.5C13.6125 10.5 12.2375 11.55 12.2375 13.5187V21H7.5625V6.95625H11.9625V8.925C12.375 8.00625 14.025 6.5625 16.3625 6.5625C18.975 6.5625 21.725 8.00625 21.725 12.3375V21H22Z",
                fill: "black"
              },
              dark: {
                d: "M4.95001 21H0.274996V6.95625H4.95001V21ZM2.6125 4.9875C1.1 4.9875 0 3.9375 0 2.49375C0 1.05 1.2375 0 2.6125 0C4.125 0 5.225 1.05 5.225 2.49375C5.225 3.9375 4.125 4.9875 2.6125 4.9875ZM22 21H17.325V13.3875C17.325 11.1563 16.3625 10.5 14.9875 10.5C13.6125 10.5 12.2375 11.55 12.2375 13.5187V21H7.5625V6.95625H11.9625V8.925C12.375 8.00625 14.025 6.5625 16.3625 6.5625C18.975 6.5625 21.725 8.00625 21.725 12.3375V21H22Z",
                fill: "white",
                fillOpacity: 0.9
              }
            }}
            transition={{ type: "spring", duration: 0.2 }}
          />
        </motion.svg>
      </a>

      <a href="https://github.com/puepis" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <motion.svg
          whileHover={{ scale: hoverScale }}
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={theme}
            variants={{
              light: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9602 0C5.80428 0 0 5.73666 0 12.8093C0 18.4673 3.737 23.261 8.82569 24.9898C9.46177 25.0684 9.7003 24.6755 9.7003 24.3612C9.7003 24.0468 9.7003 23.261 9.7003 22.1608C6.12232 22.9466 5.32722 20.4319 5.32722 20.4319C4.77064 18.9388 3.89602 18.5459 3.89602 18.5459C2.70336 17.7601 3.97554 17.7601 3.97554 17.7601C5.24771 17.8387 5.9633 19.096 5.9633 19.096C7.15596 21.0606 8.98471 20.5105 9.7003 20.1962C9.77982 19.3318 10.1774 18.7817 10.4954 18.4673C7.63303 18.153 4.61162 17.0528 4.61162 12.102C4.61162 10.6875 5.08869 9.58729 5.9633 8.64428C5.88379 8.40853 5.40673 7.0726 6.12232 5.34374C6.12232 5.34374 7.23547 5.0294 9.7003 6.67967C10.7339 6.36533 11.8471 6.28675 12.9602 6.28675C14.0734 6.28675 15.1865 6.44392 16.2202 6.67967C18.685 5.0294 19.7982 5.34374 19.7982 5.34374C20.5138 7.0726 20.0367 8.40853 19.9572 8.72287C20.7523 9.5873 21.3089 10.7661 21.3089 12.1806C21.3089 17.1314 18.2875 18.153 15.4251 18.4673C15.9021 18.8603 16.2997 19.6461 16.2997 20.8249C16.2997 22.5537 16.2997 23.8897 16.2997 24.3612C16.2997 24.6755 16.5382 25.0684 17.1743 24.9898C22.3425 23.261 26 18.4673 26 12.8093C25.9205 5.73666 20.1162 0 12.9602 0Z",
                fill: "black"
              },
              dark: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9602 0C5.80428 0 0 5.73666 0 12.8093C0 18.4673 3.737 23.261 8.82569 24.9898C9.46177 25.0684 9.7003 24.6755 9.7003 24.3612C9.7003 24.0468 9.7003 23.261 9.7003 22.1608C6.12232 22.9466 5.32722 20.4319 5.32722 20.4319C4.77064 18.9388 3.89602 18.5459 3.89602 18.5459C2.70336 17.7601 3.97554 17.7601 3.97554 17.7601C5.24771 17.8387 5.9633 19.096 5.9633 19.096C7.15596 21.0606 8.98471 20.5105 9.7003 20.1962C9.77982 19.3318 10.1774 18.7817 10.4954 18.4673C7.63303 18.153 4.61162 17.0528 4.61162 12.102C4.61162 10.6875 5.08869 9.58729 5.9633 8.64428C5.88379 8.40853 5.40673 7.0726 6.12232 5.34374C6.12232 5.34374 7.23547 5.0294 9.7003 6.67967C10.7339 6.36533 11.8471 6.28675 12.9602 6.28675C14.0734 6.28675 15.1865 6.44392 16.2202 6.67967C18.685 5.0294 19.7982 5.34374 19.7982 5.34374C20.5138 7.0726 20.0367 8.40853 19.9572 8.72287C20.7523 9.5873 21.3089 10.7661 21.3089 12.1806C21.3089 17.1314 18.2875 18.153 15.4251 18.4673C15.9021 18.8603 16.2997 19.6461 16.2997 20.8249C16.2997 22.5537 16.2997 23.8897 16.2997 24.3612C16.2997 24.6755 16.5382 25.0684 17.1743 24.9898C22.3425 23.261 26 18.4673 26 12.8093C25.9205 5.73666 20.1162 0 12.9602 0Z",
                fill: "white",
                fillOpacity: 0.9
              }
            }}
            transition={{ type: "spring", duration: 0.2 }}
          />
        </motion.svg>
      </a>

      <a href="/resume.pdf" aria-label="Resume" target="_blank" rel="noopener noreferrer">
        <motion.svg
          whileHover={{ scale: hoverScale }}
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={theme}
            variants={{
              light: {
                d: "M10.6668 20.6666H21.3335V23.2499H10.6668V20.6666ZM10.6668 15.4999H21.3335V18.0833H10.6668V15.4999ZM18.6668 2.58325H8.00016C6.5335 2.58325 5.3335 3.74575 5.3335 5.16659V25.8333C5.3335 27.2541 6.52016 28.4166 7.98683 28.4166H24.0002C25.4668 28.4166 26.6668 27.2541 26.6668 25.8333V10.3333L18.6668 2.58325ZM24.0002 25.8333H8.00016V5.16659H17.3335V11.6249H24.0002V25.8333Z",
                fill: "#323232"
              },
              dark: {
                d: "M10.6668 20.6666H21.3335V23.2499H10.6668V20.6666ZM10.6668 15.4999H21.3335V18.0833H10.6668V15.4999ZM18.6668 2.58325H8.00016C6.5335 2.58325 5.3335 3.74575 5.3335 5.16659V25.8333C5.3335 27.2541 6.52016 28.4166 7.98683 28.4166H24.0002C25.4668 28.4166 26.6668 27.2541 26.6668 25.8333V10.3333L18.6668 2.58325ZM24.0002 25.8333H8.00016V5.16659H17.3335V11.6249H24.0002V25.8333Z",
                fill: "white",
                fillOpacity: 0.9
              }
            }}
            transition={{ type: "spring", duration: 0.2 }}
          />
        </motion.svg>
      </a>
    </div>
  );
};

export default SocialBar;
