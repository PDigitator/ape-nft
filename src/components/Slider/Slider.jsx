import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SliderBtns from "../SliderBtns";
import { slidesData } from "./slidesData";
import { staticTheme } from "../../theme";
import * as s from "./Slider.styled";

const Slider = () => {
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
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <s.Thumb>
            <s.Image
              src={slide.url}
              alt={slide.alt}
              srcSet={`${slide.url} 1x, ${slide.url.replace(
                "@1x.jpg",
                "@2x.jpg"
              )} 2x`}
            />
          </s.Thumb>
        </SwiperSlide>
      ))}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
