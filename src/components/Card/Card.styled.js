import styled from "styled-components";
import { staticTheme } from "../../theme";

export const TxtThumb = styled.div`
  box-sizing: border-box;
  display: grid;
  align-content: space-between;

  height: 256px;
  max-width: 216px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${staticTheme.colors.bgSecondary};
  color: ${staticTheme.colors.txtPrimary};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 242px;
    max-width: 284px;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 480px;
    max-width: 504px;
  }
`;

export const LearnMoreThumb = styled(TxtThumb)`
  background-color: ${staticTheme.colors.bgAccent};
`;

export const SubTitle = styled.h3`
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 32px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;

  white-space: pre-wrap;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding-left: 108px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding-left: 228px;

    font-size: 24px;
    line-height: calc(29 / 24);
  }
`;

export const IconWrap = styled.span`
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: auto;

  ${LearnMoreThumb}:hover &,
  ${LearnMoreThumb}:focus &, 
  ${LearnMoreThumb}:active & {
    top: -12px;
    right: -12px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    width: 64px;
    height: 64px;
  }
`;

export const ImgThumb = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
    border-radius: 24px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 280px;
    max-width: 240px;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
