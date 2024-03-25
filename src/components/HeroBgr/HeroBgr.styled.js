import styled from "styled-components";
import { staticTheme } from "../../theme";

export const BgrWrap = styled.div`
  display: flex;
  justify-content: center;
  min-height: 542px;
  padding: 36px 64px 19px;
  border-radius: 8px;
  background-color: ${staticTheme.colors.bgAccent};

  background-image: url(${(props) =>
    props.srcMobile1x.replace(".png", ".webp")});
  background-position: bottom 110px center;
  background-repeat: no-repeat;
  background-size: 216px 284px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) =>
      props.srcMobile2x.replace(".png", ".webp")});
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    min-height: 421px;
    padding: 35px 72px;
    border-radius: 16px;

    background-image: url(${(props) =>
      props.srcTablet1x.replace(".png", ".webp")});
    background-size: 283px 386px;
    background-position: calc(50% - 20px) bottom;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) =>
        props.srcTablet2x.replace(".png", ".webp")});
    }
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-height: 677px;
    padding: 0 112px;
    border-radius: 24px;
    background-image: none;
  }

  @media screen and (min-width: calc(${staticTheme.breakpoints
      .desktop} + 0.5px)) and (max-width: calc(${staticTheme.breakpoints
      .desktopMax} - 0.5px)) {
    padding: 0 calc((100vw - 1056px) / 2);
  }

  @media screen and (min-width: calc(${staticTheme.breakpoints.desktopMax} )) {
    padding: 0 192px;
  }
`;
