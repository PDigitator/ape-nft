import styled from "styled-components";
import { staticTheme } from "../../theme";

export const BgrWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 36px;
  background-color: ${staticTheme.colors.bgPrimary};

  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 216px 292px;
`;
