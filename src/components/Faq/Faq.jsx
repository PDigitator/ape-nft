import Section from "../Section";
import Card from "../Card";
import { cardsFaqData } from "../../data/cardsFaqData";
import { useState } from "react";
import * as s from "./Faq.styled";

const Faq = () => {
  const [activeItem, setActiveItem] = useState("1");
  const cardsData = [...cardsFaqData];

  const renderCards = cardsData.map((card, index) => (
    <s.ListItem
      key={card.id}
      onClick={() => setActiveItem(String(index + 1))}
      $active={activeItem === String(index + 1)}
    >
      <Card card={card} />
    </s.ListItem>
  ));

  return (
    <Section anchorId="faq" title="Faq">
      <ul>{renderCards}</ul>
    </Section>
  );
};

export default Faq;
