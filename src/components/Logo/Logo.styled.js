import styled from "styled-components";
import { staticTheme } from "../../theme";

export const LogoWrap = styled.span`
  display: flex;
  width: 48px;
  height: 32px;

  color: ${(props) =>
    props.type === "header"
      ? staticTheme.colors.txtSecondary
      : staticTheme.colors.txtPrimary};

  &:hover,
  &:focus,
  &:active {
    color: ${(props) =>
      props.type === "header"
        ? staticTheme.colors.txtPrimary
        : staticTheme.colors.txtAccent};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    width: 72px;
    height: 50px;
  }
`;
