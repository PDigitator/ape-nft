import { useSwiper } from "swiper/react";

const SlideNextButton = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SlideNextButton;
