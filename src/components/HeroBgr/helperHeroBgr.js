import ImgMob1x from "/src/assets/images/hero-img/ape-hero-mobile@1x.png";
import ImgMobWebp1x from "/src/assets/images/hero-img/ape-hero-mobile@1x.webp";
import ImgMob2x from "/src/assets/images/hero-img/ape-hero-mobile@2x.png";
import ImgMobWebp2x from "/src/assets/images/hero-img/ape-hero-mobile@2x.webp";
import ImgTab1x from "/src/assets/images/hero-img/ape-hero-tablet@1x.png";
import ImgTabWebp1x from "/src/assets/images/hero-img/ape-hero-tablet@1x.webp";
import ImgTab2x from "/src/assets/images/hero-img/ape-hero-tablet@2x.png";
import ImgTabWebp2x from "/src/assets/images/hero-img/ape-hero-tablet@2x.webp";

export const getImageObjects = () => {
  return {
    mobile: {
      "@1x": { png: ImgMob1x, webp: ImgMobWebp1x },
      "@2x": { png: ImgMob2x, webp: ImgMobWebp2x },
    },
    tablet: {
      "@1x": { png: ImgTab1x, webp: ImgTabWebp1x },
      "@2x": { png: ImgTab2x, webp: ImgTabWebp2x },
    },
  };
};
