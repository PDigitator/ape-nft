import Section from "../Section";
import Slider from "../Slider";
import { cardsArtsData } from "../../data/cardsArtsData";

const Arts = () => {
  const cardsData = [...cardsArtsData];

  return (
    <Section anchorId="arts" title="Collection">
      <Slider cardsData={cardsData} />
    </Section>
  );
};

export default Arts;
