import { FunctionComponent } from "react";
import Hyperlink from "./Hyperlink";

const Bio: FunctionComponent = () => {
  return (
    <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-center">
      Hey there! I’m Philips and I'm a third year Computer Science student at the University of Waterloo. I'm passionate
      about full-stack development and using software to build meaningful products!
      <br />
      <br />
      I'm currently working as a Software Engineering Intern at Wish for Fall 2021. I'm also a project developer on{" "}
      <Hyperlink className="" href="https://uwblueprint.org/">
        UW Blueprint
      </Hyperlink>
      ! During my free time, I love to experiment with recipes and make tasty food!
    </p>
  );
};

export default Bio;
