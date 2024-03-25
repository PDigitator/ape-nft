import Card from "../Card";
import { cardsBurgerData } from "../../data/cardsBurgerData";
import * as s from "./BurgerMenu.styled";

const BurgerMenu = ({ onClick, type }) => {
  const cardsData = [...cardsBurgerData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id} onClick={onClick}>
      <Card card={card} type={type} />
    </li>
  ));

  return (
    <s.Nav>
      <s.List type={type}>{renderCards}</s.List>
    </s.Nav>
  );
};

export default BurgerMenu;
