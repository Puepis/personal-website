import { FunctionComponent } from "react";
import Hyperlink from "./Hyperlink";

const Bio: FunctionComponent = () => {
  return (
    <p className="text-sm sm:text-base text-light-secondary-text dark:text-white dark:text-opacity-70 text-left">
      Hey there! I’m a third-year Computer Science student at the University of Waterloo who loves to read about tech
      and discover cool software!
      <br />
      <br />
      Outside of school, I’ve had the opportunity to learn and grow at Wish &{" "}
      <Hyperlink className="" href="https://uwblueprint.org/">
        UW Blueprint
      </Hyperlink>
      . When I’m not trying to wrap my head around software, I’m either reading manga, watching food videos on YouTube,
      or cooking something new!
    </p>
  );
};

export default Bio;
