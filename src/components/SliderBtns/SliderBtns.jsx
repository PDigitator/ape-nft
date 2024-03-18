import { useSwiper } from "swiper/react";
import * as s from "./SliderBtns.styled";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <s.BtnsWrap>
      <s.SliderBtn onClick={() => swiper.slidePrev()}>Prev</s.SliderBtn>
      <s.SliderBtn onClick={() => swiper.slideNext()}>Next</s.SliderBtn>
    </s.BtnsWrap>
  );
};

export default SliderBtns;
