/* eslint-disable */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./layouts/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Inter, Arial, sans-serif"
    },

    extend: {
      colors: {
        light: {
          background: colors.white,
          "primary-text": colors.black,
          "secondary-text": "#5D5E5F",
          hyperlink: "#8F8F8F"
        },
        dark: {
          background: "#22272E",
          "primary-text": colors.white,
          "secondary-text": colors.white,
          hyperlink: colors.white
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
