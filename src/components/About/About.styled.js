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

// Приклад використання компонента BackgroundImage:
const MyComponent = () => {
  return (
    <BackgroundImage
      src="/path/to/image.png"
      srcMobile1x="/path/to/image-mobile.png"
      srcMobile2x="/path/to/image-mobile@2x.png"
      srcTablet1x="/path/to/image-tablet.png"
      srcTablet2x="/path/to/image-tablet@2x.png"
      srcDesktop1x="/path/to/image-desktop.png"
      srcDesktop2x="/path/to/image-desktop@2x.png"
    />
  );
};

export default BackgroundImage;
