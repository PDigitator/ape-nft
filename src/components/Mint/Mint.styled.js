import styled from "styled-components";
import { staticTheme } from "../../theme";

export const TxtContent = styled.p`
  margin: 0 auto 16px;
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 16px;
  line-height: calc(19 / 16);
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    margin-bottom: 24px;
    padding: 0 98px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    margin-bottom: 40px;
    padding: 0 226px;

    font-size: 24px;
    line-height: calc(29 / 24);
  }
`;

export const IconWrap = styled.span`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 16px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    margin-bottom: 40px;
  }
`;
