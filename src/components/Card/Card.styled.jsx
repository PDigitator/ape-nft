import styled from "styled-components";
import { staticTheme } from "../../theme";

export const TxtThumb = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 256px;
  max-width: 216px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${staticTheme.colors.bgSecondary};
  color: ${staticTheme.colors.txtPrimary};
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
`;

export const Description = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;
`;

export const IconWrap = styled.span`
  display: flex;
  justify-content: right;
`;

export const ImgThumb = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 24px;
  overflow: hidden;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 280px;
    max-width: 240px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;
