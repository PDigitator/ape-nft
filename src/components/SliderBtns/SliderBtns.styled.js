import styled from "styled-components";
import { staticTheme } from "../../theme";

export const BtnsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;

  margin-top: 24px;
`;

export const SliderBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  font-family: inherit;
  background-color: transparent;

  color: ${staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontAccent};
  font-size: 24px;
  line-height: 125%;

  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtAccent};
  }
`;
