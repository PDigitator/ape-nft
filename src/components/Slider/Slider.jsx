import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SliderBtns from "../SliderBtns";

import { staticTheme } from "../../theme";
import * as s from "./Slider.styled";

const Slider = ({ slidesData }) => {
  const breakpoints = {
    [staticTheme.breakpoints.desktop.slice(0, -2) - 1]: {
      slidesPerView: 4,
    },
    [staticTheme.breakpoints.tablet.slice(0, -2) - 1]: {
      slidesPerView: 2,
    },
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case "text":
        return (
          <s.TxtThumb>
            <s.Description>{slide.description}</s.Description>
            <s.SubTitle>{slide.subTitle}</s.SubTitle>
          </s.TxtThumb>
        );
      case "learn-more":
        return (
          <a href={slide.url} rel="noopener noreferrer nofollow">
            <s.LearnMoreThumb>
              <s.IconWrap>{slide.icon()}</s.IconWrap>
              <s.SubTitle>{slide.subTitle}</s.SubTitle>
            </s.LearnMoreThumb>
          </a>
        );
      case "image":
        return (
          <s.ImgThumb>
            <s.Image
              src={slide.url}
              alt={slide.alt}
              srcSet={`${slide.url} 1x, ${slide.url.replace(
                "@1x.jpg",
                "@2x.jpg"
              )} 2x`}
            />
          </s.ImgThumb>
        );
      default:
        return null;
    }
  };

  const renderedSlides = slidesData.map((slide) => (
    <SwiperSlide key={slide.id}>{renderSlide(slide)}</SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      speed={500}
      initialSlide={0}
      breakpoints={breakpoints}
    >
      {renderedSlides}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
