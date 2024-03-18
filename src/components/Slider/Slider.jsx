import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { slidesData } from "./slidesData";
import { staticTheme } from "../../theme";
import * as s from "./Slider.styled";
// import { useState } from "react";
import SlideNextButton from "./SlideNextButton";

const SliderResp = () => {
  //   const [swiper, setSwiper] = useState(null);

  const swiper = useSwiper();
  const handleSlideNext = () => {
    swiper.slideNext();
  };
  //   const next = () => {
  //     if (swiperRef && swiperRef.current) {
  //       swiperRef.current.slideNext();
  //     }
  //   };

  //   const previous = () => {
  //     if (swiperRef && swiperRef.current) {
  //       swiperRef.current.slidePrev();
  //     }
  //   };

  const breakpoints = {
    [staticTheme.breakpoints.desktop.slice(0, -2) - 1]: {
      slidesPerView: 4,
    },
    [staticTheme.breakpoints.tablet.slice(0, -2) - 1]: {
      slidesPerView: 2,
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        speed={500}
        initialSlide={0}
        breakpoints={breakpoints}
        // onSwiper={(s) => {
        //   console.log("initialize swiper", s);
        //   setSwiper(s);
        // }} //!
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
        <button onClick={() => swiper.slideNext()}>Next1</button>;
        <SlideNextButton>Next</SlideNextButton>
      </Swiper>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={() => swiper.slidePrev()}>
          Previous
        </button>
        <button className="button" onClick={() => swiper.slideNext()}>
          Next
        </button>
      </div>
    </>
  );
};

export default SliderResp;
