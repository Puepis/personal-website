import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="transition duration-300 bg-light-background dark:bg-dark-background text-black dark:text-white dark:text-opacity-90">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
