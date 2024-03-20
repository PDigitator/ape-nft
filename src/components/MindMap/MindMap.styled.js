import styled from "styled-components";
import { staticTheme } from "../../theme";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));
  gap: 24px;

  padding: 0;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fill, minmax(504px, 1fr));
  }
`;
