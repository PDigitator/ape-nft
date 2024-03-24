import BurgerMenu from "../BurgerMenu";
import Button from "../Button";
import Logo from "../Logo";
import SocialMenu from "../SocialMenu";
import { Content } from "../Footer/Footer.styled";
import * as s from "./ModalMenu.styled";

const ModalMenu = ({ onClose }) => {
  return (
    <>
      <s.Container>
        <s.LinksContainer>
          <Logo />
          <Button name="modal" type="button" text="Close" onClick={onClose} />
        </s.LinksContainer>
        <SocialMenu type="modal" />
      </s.Container>
      <BurgerMenu type="modal" onClick={onClose} />
      <Content>{"\u00A9"} Yacht ape 2024 all rights reserved</Content>
    </>
  );
};

export default ModalMenu;
