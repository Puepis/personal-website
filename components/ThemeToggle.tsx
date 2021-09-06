import React, { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ThemeToggle: FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      className="absolute top-0 right-0 mt-8 mr-8 z-10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      animate={theme}
      aria-label="theme-toggle"
    >
      <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={{
            light: {
              d: "M45 0.708252H15C6.72 0.708252 0 7.33492 0 15.4999C0 23.6649 6.72 30.2916 15 30.2916H45C53.28 30.2916 60 23.6649 60 15.4999C60 7.33492 53.28 0.708252 45 0.708252ZM15 24.3749C10.02 24.3749 6 20.4108 6 15.4999C6 10.5891 10.02 6.62492 15 6.62492C19.98 6.62492 24 10.5891 24 15.4999C24 20.4108 19.98 24.3749 15 24.3749Z",
              fill: "#22272E"
            },
            dark: {
              d: "M45 0H15C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30H45C53.28 30 60 23.28 60 15C60 6.72 53.28 0 45 0ZM45 24C40.02 24 36 19.98 36 15C36 10.02 40.02 6 45 6C49.98 6 54 10.02 54 15C54 19.98 49.98 24 45 24Z",
              fill: "white"
            }
          }}
          transition={{ type: "spring", duration: 0.5 }}
        />
      </svg>
    </motion.button>
  );
};

export default ThemeToggle;
