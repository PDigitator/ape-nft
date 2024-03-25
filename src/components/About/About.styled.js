import styled from "styled-components";

const breakpoints = {
  mobile: "360px",
  tablet: "768px",
  desktop: "1280px",
};

const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.src.replace(".png", ".webp")});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media ${media.mobile} {
    background-image: url(${(props) =>
      props.srcMobile1x.replace(".png", ".webp")});
  }

  @media ${media.mobile} and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${(props) =>
      props.srcMobile2x.replace(".png", ".webp")});
  }

  @media ${media.tablet} {
    background-image: url(${(props) =>
      props.srcTablet1x.replace(".png", ".webp")});
  }

  @media ${media.tablet} and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${(props) =>
      props.srcTablet2x.replace(".png", ".webp")});
  }

  @media ${media.desktop} {
    background-image: url(${(props) =>
      props.srcDesktop1x.replace(".png", ".webp")});
  }

  @media ${media.desktop} and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${(props) =>
      props.srcDesktop2x.replace(".png", ".webp")});
  }
`;

// helper.js
import Image1x from "../../assets/images/hero-img/ape-hero-desktop@1x.png";
import Image2x from "../../assets/images/hero-img/ape-hero-desktop@2x.png";
import Image1xWebp from "../../assets/images/hero-img/ape-hero-desktop@1x.webp";
import Image2xWebp from "../../assets/images/hero-img/ape-hero-desktop@2x.webp";

export const getImageObjects = () => {
  return {
    "@1x": { png: Image1x, webp: Image1xWebp },
    "@2x": { png: Image2x, webp: Image2xWebp },
  };
};

// Приклад використання компонента BackgroundImage:

import { getImageObjects } from "./helper";

const MyComponent = () => {
  const imageObjects = getImageObjects();

  return (
    <BackgroundImage
      src={imageObjects["@1x"].png}
      srcMobile1x={imageObjects["@1x"].png}
      srcMobile2x={imageObjects["@2x"].png}
      srcTablet1x={imageObjects["@1x"].png}
      srcTablet2x={imageObjects["@2x"].png}
      srcDesktop1x={imageObjects["@1x"].png}
      srcDesktop2x={imageObjects["@2x"].png}
    />
  );
};

export default MyComponent;
