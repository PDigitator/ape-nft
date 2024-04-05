// import { getImageObjects } from "./helperAboutBgr";
import * as s from "./AboutBgr.styled";

const AboutBgr = ({ children }) => {
  // const imageObjects = getImageObjects();

  return (
    <s.BgrWrap
      // src={imageObjects.mobile["@1x"].png}
      // srcMobile1x={imageObjects.mobile["@1x"].png}
      // srcMobile2x={imageObjects.mobile["@2x"].png}
      // srcTablet1x={imageObjects.tablet["@1x"].png}
      // srcTablet2x={imageObjects.tablet["@2x"].png}
      // srcDesktop1x={imageObjects.desktop["@1x"].png}
      // srcDesktop2x={imageObjects.desktop["@2x"].png}
      style={{
        backgroundImage: `url("/src/assets/images/about-img/ape-about-desktop@1x.webp"`,
      }}
    >
      {children}
    </s.BgrWrap>
  );
};

export default AboutBgr;
