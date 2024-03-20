import styled from "styled-components";
import { staticTheme } from "../../theme";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: calc(100% + (100vw - 100%));
  margin-left: calc(-1 * (100vw - 100%) / 2);

  background-color: ${staticTheme.colors.bgAccent};

  @media screen and (min-width: ${staticTheme.breakpoints.desktopMax}) {
    width: calc(100% + 408px);
    margin-left: -204px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  white-space: nowrap;

  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Span = styled.span`
  display: block;
  padding: 6px 24px 10px;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 6px 36px 16px;
  }
`;

export const IconWrap = styled.span`
  display: flex;
  width: 36px;
  height: 36px;
`;
