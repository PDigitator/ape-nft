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
  margin: 0 auto;
  padding: 0 calc((100vw - 216px) / 2);

  @media screen and (min-width: (${staticTheme.breakpoints
      .mobile})) and (max-width: calc(${staticTheme.breakpoints
      .mobileMax} - 0.5px)) {
    padding: ${(props) =>
      props.title === "About" ? "72px" : `0 calc((100vw - 216px) / 2)`};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 0 calc((100vw - 592px) / 2);
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 0 calc((100vw - 1032px) / 2);
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
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 44px;
  font-weight: 900;
  line-height: calc(40 / 44);
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    margin-bottom: 40px;
    font-size: 80px;
    line-height: 100%;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    margin-bottom: 80px;
    font-size: 160px;
  }
`;

export const TitleFaq = styled(Title)`
  @media screen and (min-width: ${staticTheme.breakpoints
      .tablet}) and (max-width: calc(${staticTheme.breakpoints
      .desktop} - 0.5px)) {
    margin-bottom: 48px;
  }
`;
