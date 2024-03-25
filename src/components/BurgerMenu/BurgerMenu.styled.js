import styled from "styled-components";
import { staticTheme } from "../../theme";

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;

  @media screen and (min-width: calc(${staticTheme.breakpoints
      .mobileMax} - 0.5px)) {
    justify-content: flex-end;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.type === "header" ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.type === "header" ? "0" : "27px")};
`;
