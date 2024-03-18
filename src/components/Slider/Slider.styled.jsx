import styled from "styled-components";
import { staticTheme } from "../../theme";

export const Thumb = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 24px;
  overflow: hidden;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 280px;
    max-width: 240px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;
