import styled from "styled-components";
import { staticTheme } from "../../theme";

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;

  /* @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    gap: 27px;
  } */ //!
`;
