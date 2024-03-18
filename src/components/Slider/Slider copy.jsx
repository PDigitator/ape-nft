import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesData } from "./slidesData";
import { staticTheme } from "../../theme";
import * as s from "./Slider.styled";

const SliderResp = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: staticTheme.breakpoints.desktop.slice(0, -2) - 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: staticTheme.breakpoints.tablet.slice(0, -2) - 1,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {slidesData.map((slide) => (
          <s.Thumb key={slide.id}>
            <s.Image
              src={slide.url}
              alt={slide.alt}
              srcSet={`${slide.url} 1x, ${slide.url.replace(
                "@1x.jpg",
                "@2x.jpg"
              )} 2x`}
            />
          </s.Thumb>
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SliderResp;
