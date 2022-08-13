import { FunctionComponent } from "react";
import Hyperlink from "./Hyperlink";

const Bio: FunctionComponent = () => {
  return (
    <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-left">
      Hey there! I’m a 3rd year Computer Science student at the University of Waterloo, passionate about building
      reliable and user-friendly software. I love reading about new technologies and seeing how things are done at
      scale!
      <br />
      <br />
      Outside of school, I’ve had the opportunity to learn and grow at BitGo, Wish &{" "}
      <Hyperlink className="" href="https://uwblueprint.org/">
        UW Blueprint
      </Hyperlink>
      . When I’m not trying to wrap my head around software, I’m probably cooking, researching recipes, or relaxing to
      music!
    </p>
  );
};

export default Bio;
