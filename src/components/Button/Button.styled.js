import styled from "styled-components";
import { staticTheme } from "../../theme";

export const Btn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  font-family: inherit;
  background-color: transparent;

  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};
`;

export const BtnMenu = styled(Btn)`
  min-width: 48px;
  padding: 17px 0;

  border-radius: 8px;
  background-color: ${staticTheme.colors.bgNavPrimary};
  backdrop-filter: ${staticTheme.filters.backdrop};

  color: ${staticTheme.colors.txtSecondary};
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  font-weight: 600;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtPrimary};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 80px;
    padding: 31px 0;

    border-radius: 12px;

    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const BtnModal = styled(BtnMenu)`
  background-color: ${staticTheme.colors.bgNavSecondary};
  color: ${staticTheme.colors.txtPrimary};

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtAccent};
  }
`;

export const BtnSlider = styled(Btn)`
  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontAccent};
  font-size: 24px;
  line-height: 125%;

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtAccent};
  }
`;

export const BtnForm = styled(Btn)`
  display: block;
  margin: 0 auto;
  min-width: 216px;
  padding: 10px 0 12px;

  border-radius: 8px;
  background-color: ${staticTheme.colors.bgAccent};
  backdrop-filter: ${staticTheme.filters.backdrop};

  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 16px;
  font-weight: 900;
  line-height: calc(19 / 16);
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtSecondary};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    min-width: 247px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 397px;
    padding: 16px 0 20px;

    border-radius: 12px;

    font-size: 28px;
    line-height: calc(34 / 28);
  }
`;
