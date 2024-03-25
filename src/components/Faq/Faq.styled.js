import styled from "styled-components";
import { staticTheme } from "../../theme";
import { FaqImgThumb, FaqTxtThumb, FaqDescription } from "../Card/Card.styled";

export const ListItem = styled.li`
  display: flex;
  position: relative;
  gap: 8px;
  padding: 8px;

  counter-increment: list-counter;
  cursor: pointer;
  transition: all 250ms ${staticTheme.timingFunction.cubicBezier};

  &:first-child {
    ${(props) => (props.$active ? `padding-top: 8px;` : `padding-top: 0;`)}
  }

  &:last-child {
    ${(props) =>
      props.$active ? `padding-bottom: 10px;` : `padding-bottom: 0;`}
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 18px 16px 18px 183px;
    gap: 21px;

    &:first-child {
      ${(props) => (props.$active ? `padding-top: 18px;` : `padding-top: 0;`)}
    }

    &:last-child {
      ${(props) =>
        props.$active ? `padding-bottom: 23px;` : `padding-bottom: 0;`}
    }
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 24px 24px 24px 297px;
    gap: 27px;

    &:first-child {
      ${(props) => (props.$active ? `padding-top: 24px;` : `padding-top: 0;`)}
    }

    &:last-child {
      ${(props) =>
        props.$active ? `padding-bottom: 24px;` : `padding-bottom: 0;`}
    }
  }

  &:focus,
  &:hover {
    color: ${staticTheme.colors.txtAccent};
  }

  ${(props) =>
    props.$active &&
    `
    padding-top: 8px;    
    padding-bottom: 10px;
    border-radius: 12px;
    color: ${staticTheme.colors.txtAccent};
    background-color: ${staticTheme.colors.bgSecondary};

    @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
        border-radius: 16px;
        
    }

    @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
        border-radius: 24px;
    }

    &:before {
        color: ${staticTheme.colors.txtPrimary};
    }

    > ${FaqTxtThumb} > ${FaqDescription} {
        display: block;
        color: ${staticTheme.colors.txtPrimary};
    } 

    > ${FaqImgThumb}  {
        @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
            display: block;
    } } 
`}

  &::before {
    content: "[ " counter(list-counter) " ]";
    color: ${staticTheme.colors.txtAccent};

    padding-top: 3px;
    font-family: ${staticTheme.fonts.fontSecondary};
    font-size: 12px;
    line-height: calc(20 / 12);

    white-space: nowrap;

    @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
      padding-top: 2px;
      font-size: 16px;
      line-height: calc(27 / 12);
    }

    @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
      padding-top: 15px;
      font-size: 24px;
      line-height: calc(40 / 24);
    }
  }

  &:focus::before,
  &:hover::before {
    color: ${staticTheme.colors.txtPrimary};
  }
`;
