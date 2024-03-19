import Section from "../Section";
import Slider from "../Slider";
import { cardsArtsData } from "../../data/cardsArtsData";

// import * as s from "./Arts.styled";

const Arts = () => {
  return (
    <Section anchorId="arts" title="Collection">
      <p>Arts</p>
      <Slider cardsData={cardsArtsData} />
    </Section>
  );
};

export default Arts;
