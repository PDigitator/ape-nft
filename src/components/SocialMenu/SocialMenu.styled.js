import styled from "styled-components";
import { staticTheme } from "../../theme";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-top: 8px;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    gap: 16px;
    margin-top: 16px;
  }
`;
