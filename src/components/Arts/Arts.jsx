import Section from "../Section";
import Slider from "../Slider";
import { slidesArtsData } from "../../data/slidesArtsData";

// import * as s from "./Arts.styled";

const Arts = () => {
  return (
    <Section anchorId="arts" title="Car">
      <p>Arts</p>
      <Slider slidesData={slidesArtsData} />
    </Section>
  );
};

export default Arts;
