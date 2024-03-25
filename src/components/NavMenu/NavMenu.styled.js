import styled from "styled-components";
import { staticTheme } from "../../theme";

export const BurgerWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: ${staticTheme.colors.bgNavPrimary};
  backdrop-filter: ${staticTheme.filters.backdrop};

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    border-radius: 12px;
  }
`;
