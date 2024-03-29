import { getImageObjects } from "./helperHeroBgr";
import * as s from "./HeroBgr.styled";

const HeroBgr = ({ children }) => {
  const imageObjects = getImageObjects();

  return (
    <s.BgrWrap
      src={imageObjects.mobile["@1x"].png}
      srcMobile1x={imageObjects.mobile["@1x"].png}
      srcMobile2x={imageObjects.mobile["@2x"].png}
      srcTablet1x={imageObjects.tablet["@1x"].png}
      srcTablet2x={imageObjects.tablet["@2x"].png}
    >
      {children}
    </s.BgrWrap>
  );
};

export default HeroBgr;
