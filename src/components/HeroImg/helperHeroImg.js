import Image1x from "/src/assets/images/hero-img/ape-hero-desktop@1x.png";
import Image2x from "/src/assets/images/hero-img/ape-hero-desktop@2x.png";
import Image1xWebp from "/src/assets/images/hero-img/ape-hero-desktop@1x.webp";
import Image2xWebp from "/src/assets/images/hero-img/ape-hero-desktop@2x.webp";

export const getImageObjects = () => {
  return {
    "@1x": { png: Image1x, webp: Image1xWebp },
    "@2x": { png: Image2x, webp: Image2xWebp },
  };
};
