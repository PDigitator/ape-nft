import styled from "styled-components";
import { staticTheme } from "../../theme";

export const HeaderWrap = styled.header`
  /* position: fixed;
  top: 0; */ //!TODO: for scroll

  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 62px 0;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 66px 0;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 40px 0;
  }
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: calc(${staticTheme.breakpoints.mobileMax} )) {
    padding: 0 calc((100vw - 448px) / 2);
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 0 calc((100vw - 712px) / 2);
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 0 calc((100vw - 1216px) / 2);
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
