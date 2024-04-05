import ImgMob1x from "/images/about-img/ape-about-mobile@1x.png";
import ImgMobWebp1x from "/images/about-img/ape-about-mobile@1x.webp";
import ImgMob2x from "/images/about-img/ape-about-mobile@2x.png";
import ImgMobWebp2x from "/images/about-img/ape-about-mobile@2x.webp";
import ImgTab1x from "/images/about-img/ape-about-tablet@1x.png";
import ImgTabWebp1x from "/images/about-img/ape-about-tablet@1x.webp";
import ImgTab2x from "/images/about-img/ape-about-tablet@2x.png";
import ImgTabWebp2x from "/images/about-img/ape-about-tablet@2x.webp";
import ImgDTop1x from "/images/about-img/ape-about-desktop@1x.png";
import ImgDTopWebp1x from "/images/about-img/ape-about-desktop@1x.webp";
import ImgDTop2x from "/images/about-img/ape-about-desktop@2x.png";
import ImgDTopWebp2x from "/images/about-img/ape-about-desktop@2x.webp";

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
    desktop: {
      "@1x": { png: ImgDTop1x, webp: ImgDTopWebp1x },
      "@2x": { png: ImgDTop2x, webp: ImgDTopWebp2x },
    },
  };
};
