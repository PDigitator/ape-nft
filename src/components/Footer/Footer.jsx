import { Container } from "../Section/Section.styled";
import * as s from "./Footer.styled";

const Footer = () => {
  return (
    <s.FooterWrap>
      <Container>
        <s.Content>{"\u00A9"} Yacht ape 2024 all rights reserved</s.Content>
      </Container>
    </s.FooterWrap>
  );
};

export default Footer;
