import styled from "styled-components";
import { staticTheme } from "../../theme";

export const BgrWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 36px;
  background-color: ${staticTheme.colors.bgPrimary};

  background-image: url(${(props) =>
    props.srcMobile1x.replace(".png", ".webp")});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 216px 292px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) =>
      props.srcMobile2x.replace(".png", ".webp")});
  }

  @media screen and (max-width: calc(${staticTheme.breakpoints
      .tablet} - 0.5px)) {
    padding-bottom: 332px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding-bottom: 36px;
    gap: 68px;

    background-image: url(${(props) =>
      props.srcTablet1x.replace(".png", ".webp")});
    background-size: 313px 422px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) =>
        props.srcTablet2x.replace(".png", ".webp")});
    }
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding-bottom: 40px;
    gap: 56px;

    background-image: url(${(props) =>
      props.srcDesktop1x.replace(".png", ".webp")});
    background-size: 492px 662px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) =>
        props.srcDesktop2x.replace(".png", ".webp")});
    }
  }
`;
