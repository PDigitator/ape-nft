import styled from "styled-components";
import { staticTheme } from "../../theme";

export const SectionWrap = styled.section`
  padding: 30px 0;
  background-color: ${staticTheme.colors.bgPrimary};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 40px 0;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  min-width: ${staticTheme.breakpoints.mobileMin};
  max-width: ${staticTheme.breakpoints.mobileMax};
  margin: 0 auto;
  padding: 0 72px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 0 88px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    max-width: ${staticTheme.breakpoints.desktopMax};
    padding: 0 204px;
  }
`;

export const TitleHidden = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`; //!
