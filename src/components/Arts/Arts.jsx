import Section from "../Section";
import Slider from "../Slider";
import { cardsArtsData } from "../../data/cardsArtsData";

// import * as s from "./Arts.styled";

const Arts = () => {
  const cardsData = [...cardsArtsData];

  return (
    <Section anchorId="arts" title="Collection">
      <p>Arts</p>
      <Slider cardsData={cardsData} />
    </Section>
  );
};

export default Arts;
