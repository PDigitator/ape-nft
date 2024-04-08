import Card from "../Card";
import { cardsSocialData } from "../../data/cardsSocialData";
import * as s from "./SocialMenu.styled";

const SocialMenu = ({ kind }) => {
  const cardsData = [...cardsSocialData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id}>
      <Card card={card} kind={kind} />
    </li>
  ));

  return <s.List>{renderCards}</s.List>;
};

export default SocialMenu;
