import Section from "../Section";
import Slider from "../Slider";
import { cardsMindMapData } from "../../data/cardsMindMapData";
import { staticTheme } from "../../theme";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// import * as s from "./MindMap.styled";

const MindMap = () => {
  const mediaQueryRef = useRef(
    window.matchMedia(
      `(max-width: calc(${staticTheme.breakpoints.mobileMax} + 0.5px))`
    )
  );

  const mediaQuery = mediaQueryRef.current;

  const [isMobileView, setIsMobileView] = useState(mediaQuery.matches);
  // const [showSideBar, setShowSideBar] = useState(!mediaQuery.matches);
  // const [showBurger, setShowBurger] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = (evt) => {
      setIsMobileView(evt.matches);
      // setShowSideBar(!evt.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [mediaQuery]);

  // useEffect(() => {
  //   setShowBurger(!showSideBar);
  // }, [showSideBar]);

  // const onSideBar = () => {
  //   setShowSideBar((prevState) => !prevState);
  // };

  // const togglshowBurger = () => {};

  // const onRedirect = () => {
  //   if (mediaQuery.matches) {
  //     setShowSideBar(false);
  //   }
  // };

  // return (
  //   <>
  //     {(!mediaQuery.matches || showSideBar) && (
  //       <SideBar
  //         isMobileView={isMobileView}
  //         togglshowBurger={togglshowBurger}
  //         onSideBar={onSideBar}
  //         onRedirect={onRedirect}
  //       />
  //     )}
  return (
    <Section anchorId="mind-map" title="Mind map">
      {isMobileView ? <Slider cardsData={cardsMindMapData} /> : <p>MindMap</p>}
    </Section>
  );
};

export default MindMap;
