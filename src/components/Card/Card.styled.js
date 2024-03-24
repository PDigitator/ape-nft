import styled from "styled-components";
import { staticTheme } from "../../theme";

export const TxtThumb = styled.div`
  box-sizing: border-box;
  display: grid;
  align-content: space-between;

  height: 256px;
  max-width: 216px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${staticTheme.colors.bgSecondary};
  color: ${staticTheme.colors.txtPrimary};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 242px;
    max-width: 284px;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 480px;
    max-width: 504px;
  }
`;

export const LearnMoreLink = styled.a`
  box-sizing: border-box;
  display: grid;
  align-content: space-between;

  height: 256px;
  max-width: 216px;
  padding: 24px 12px;
  border-radius: 12px;
  background-color: ${staticTheme.colors.bgAccent};
  color: ${staticTheme.colors.txtPrimary};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 242px;
    max-width: 284px;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 480px;
    max-width: 504px;
  }
`;
// export const LearnMoreLink = styled(TxtThumb)`
//   background-color: ${staticTheme.colors.bgAccent};
// `; //!!!!!

export const SubTitle = styled.h3`
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 32px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;

  white-space: pre-wrap;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding-left: 108px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding-left: 228px;

    font-size: 24px;
    line-height: calc(29 / 24);
  }
`;

export const IconWrap = styled.span`
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: auto;

  ${LearnMoreLink}:hover &,
  ${LearnMoreLink}:focus &, 
  ${LearnMoreLink}:active & {
    top: -12px;
    right: -12px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    width: 64px;
    height: 64px;
  }
`;

export const ImgThumb = styled.div`
  height: 256px;
  max-width: 216px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 336px;
    max-width: 284px;
    border-radius: 24px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 280px;
    max-width: 240px;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const FaqImgThumb = styled.div`
  display: none;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    position: absolute;
    z-index: 1000;
    top: -12px;
    left: 19px;

    height: 183px;
    max-width: 148px;
    border-radius: 16px;
    overflow: hidden;

    @keyframes rotateCard {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-16deg);
      }
    }

    animation: rotateCard 250ms ${staticTheme.timingFunction.cubicBezier}
      forwards;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    top: -16px;
    left: 16px;
    height: 282px;
    max-width: 248px;
    border-radius: 24px;

    @keyframes rotateCard {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-8deg);
      }
    }
  }
`;

export const FaqTxtThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    gap: 36px;
  }
`;

export const FaqSubTitle = styled.h3`
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 20px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (max-width: ${staticTheme.breakpoints.tablet - 0.5}) {
    white-space: pre-wrap;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 54px;
    line-height: calc(64 / 54);
  }
`;

export const FaqDescription = styled.p`
  display: none;

  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.type === "header"
      ? staticTheme.colors.bgNavPrimary
      : staticTheme.colors.bgNavSecondary};

  backdrop-filter: ${staticTheme.filters.backdrop};

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
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;

export const SocialIconWrap = styled.span`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;

  /* color: ${(props) =>
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
  } */

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const BurgerLink = styled.a`
  display: block;
  min-width: ${(props) => (props.type === "header" ? "48px" : "120px")};
  padding: ${(props) => (props.type === "header" ? "17px 0" : "0")};

  border-radius: 8px;
  background-color: ${(props) =>
    props.type === "header" ? staticTheme.colors.bgNavPrimary : "transparent"};
  backdrop-filter: ${staticTheme.filters.backdrop};

  color: ${(props) =>
    props.type === "header"
      ? staticTheme.colors.txtSecondary
      : staticTheme.colors.txtPrimary};
  font-family: ${staticTheme.fonts.fontPrimary};

  font-size: ${(props) => (props.type === "header" ? "12px" : "24px")};
  line-height: ${(props) =>
    props.type === "header" ? "calc(14 / 12)" : "calc(29 / 24)"};

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) =>
      props.type === "header"
        ? staticTheme.colors.txtPrimary
        : staticTheme.colors.txtAccent};
    text-decoration: ${(props) =>
      props.type === "header" ? "underline" : "none"};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 80px;
    padding: 31px 0;

    border-radius: 12px;

    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;
