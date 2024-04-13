import Card from "../Card";
import { cardsBurgerData } from "../../data/cardsBurgerData";
import * as s from "./BurgerMenu.styled";

const BurgerMenu = ({ onClick, variant }) => {
  const cardsData = [...cardsBurgerData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id} onClick={onClick}>
      <Card card={card} variant={variant} />
    </li>
  ));

  return (
    <s.Nav>
      <s.List variant={variant}>{renderCards}</s.List>
    </s.Nav>
  );
};

export default BurgerMenu;
