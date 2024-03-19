import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Card from "../Card";
import SliderBtns from "../SliderBtns";
import { staticTheme } from "../../theme";

const Slider = ({ cardsData }) => {
  const breakpoints = {
    [staticTheme.breakpoints.desktop.slice(0, -2) - 1]: {
      slidesPerView: 4,
    },
    [staticTheme.breakpoints.tablet.slice(0, -2) - 1]: {
      slidesPerView: 2,
    },
  };

  const renderCards = cardsData.map((card) => (
    <SwiperSlide key={card.id}>
      <Card card={card} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      speed={500}
      initialSlide={0}
      breakpoints={breakpoints}
    >
      {renderCards}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
