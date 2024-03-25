import styled from "styled-components";
import { staticTheme } from "../../theme";

export const DescrWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: calc(${staticTheme.breakpoints
      .tablet} - 0.5px)) {
    gap: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 48px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    gap: 85px;
  }
`;

export const SubTitle = styled.h3`
  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 40px;
  font-weight: 900;
  line-height: 100%;
  text-align: left;
  text-transform: uppercase;
  white-space: pre-wrap;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    font-size: 60px;
    min-width: 269px;
    white-space: normal;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 538px;
    font-size: 120px;
  }
`;

export const Span = styled.span`
  color: ${staticTheme.colors.txtAccent};
`;

export const Description = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 16px;
  line-height: calc(19 / 16);
  text-transform: uppercase;
  text-align: right;
  text-indent: 60%;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding-top: 11px;
    text-indent: 0;
    white-space: pre-wrap;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding-top: 24px;
    font-size: 24px;
    line-height: calc(29 / 24);
    white-space: pre-wrap;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    max-width: 269px;
    /* padding-bottom: 36px; */
    gap: 24px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    max-width: 417px;
    gap: 36px;
  }
`;

export const IconWrap = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    width: 36px;
    height: 36px;
  }
`;

export const AboutText = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);

  text-transform: uppercase;
  white-space: pre-wrap;
  text-align: center;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: calc(19 / 16);
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: calc(29 / 24);
  }
`;
