import Section from "../Section";
import Slider from "../Slider";
import Card from "../Card";
import { cardsMindMapData } from "../../data/cardsMindMapData";
import * as s from "./MindMap.styled";

const MindMap = ({ isMobileView }) => {
  const cardsData = [...cardsMindMapData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id}>
      <Card card={card} />
    </li>
  ));

  return (
    <Section anchorId="mind-map" title="Mind map">
      {isMobileView ? (
        <Slider cardsData={cardsData} />
      ) : (
        <s.List>{renderCards}</s.List>
      )}
    </Section>
  );
};

export default MindMap;
