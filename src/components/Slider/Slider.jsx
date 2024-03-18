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

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      speed={500}
      initialSlide={0}
      breakpoints={breakpoints}
    >
      {slidesData.map((slide) => {
        switch (slide.type) {
          case "text":
            return (
              <SwiperSlide key={slide.id}>
                <s.TxtThumb>
                  <s.Description>{slide.description}</s.Description>
                  <s.SubTitle>{slide.subTitle}</s.SubTitle>
                </s.TxtThumb>
              </SwiperSlide>
            );
          case "learn-more":
            return (
              <SwiperSlide key={slide.id}>
                <s.LearnMoreThumb>
                  <s.IconWrap>{slide.icon()}</s.IconWrap>
                  <s.SubTitle>{slide.subTitle}</s.SubTitle>
                </s.LearnMoreThumb>
              </SwiperSlide>
            );
          case "image":
            return (
              <SwiperSlide key={slide.id}>
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
              </SwiperSlide>
            );
          default:
            return null;
        }
      })}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
