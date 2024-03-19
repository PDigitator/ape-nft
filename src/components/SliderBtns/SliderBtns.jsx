import { useSwiper } from "swiper/react";
import Button from "../Button";
import * as s from "./SliderBtns.styled";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <s.BtnsWrap>
      <Button
        name="slider"
        type="button"
        text="Prev"
        onClick={() => swiper.slidePrev()}
      ></Button>
      <Button
        name="slider"
        type="button"
        text="Next"
        onClick={() => swiper.slideNext()}
      ></Button>
    </s.BtnsWrap>
  );
};

export default SliderBtns;
