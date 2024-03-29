import { getImageObjects } from "./helperHeroImg";
import * as s from "./HeroImg.styled";

const HeroImg = () => {
  const imageObjects = getImageObjects();

  return (
    <s.ImgThumb>
      <picture>
        <source
          srcSet={`${imageObjects["@1x"].webp} 1x, ${imageObjects["@2x"].webp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${imageObjects["@1x"].jpg} 1x, ${imageObjects["@2x"].jpg} 2x`}
          type="image/jpeg"
        />
        <img
          srcSet={`${imageObjects["@1x"].jpg} 1x, ${imageObjects["@2x"].jpg} 2x`}
          src={imageObjects["@1x"].jpg}
          alt="Hero Ape"
        />
      </picture>
    </s.ImgThumb>
  );
};

export default HeroImg;
