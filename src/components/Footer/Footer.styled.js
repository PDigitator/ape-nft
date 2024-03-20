import styled from "styled-components";
import { staticTheme } from "../../theme";

export const FooterWrap = styled.footer`
  padding: 30px 0 24px;
  background-color: ${staticTheme.colors.bgPrimary};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 40px 0 40px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 60px 0 40px;
  }
`;

export const Content = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;
