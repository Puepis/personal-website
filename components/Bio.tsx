import { FunctionComponent } from "react";

const Bio: FunctionComponent = () => {
  return (
    <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center">
      Hey there! I’m Philips and I'm a third year Computer Science student at the University of Waterloo. I'm passionate
      about full-stack development and using software to build meaningful products!
      <br />
      <br />
      I'm currently working as a Software Engineering Intern at Wish for Fall 2021. I'm also a project developer on{" "}
      <a
        className="underline text-light-hyperlink text-opacity-50 dark:text-dark-hyperlink dark:text-opacity-50"
        href="https://uwblueprint.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        UW Blueprint
      </a>
      ! During my free time, I love to experiment with recipes and make tasty food!
    </p>
  );
};

export default Bio;
