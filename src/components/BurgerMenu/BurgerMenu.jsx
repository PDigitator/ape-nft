import Card from "../Card";
import { cardsBurgerData } from "../../data/cardsBurgerData";
import * as s from "./BurgerMenu.styled";

const BurgerMenu = ({ onClick, kind }) => {
  const cardsData = [...cardsBurgerData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id} onClick={onClick}>
      <Card card={card} kind={kind} />
    </li>
  ));

  return (
    <s.Nav>
      <s.List kind={kind}>{renderCards}</s.List>
    </s.Nav>
  );
};

export default BurgerMenu;
