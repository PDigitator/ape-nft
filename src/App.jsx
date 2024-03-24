import { useState, useEffect, useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MindMap from "./components/MindMap";
import Faq from "./components/Faq";
import Arts from "./components/Arts";
import Mint from "./components/Mint";
import Footer from "./components/Footer";
import { staticTheme } from "./theme";

const App = () => {
  // const mediaQueryRef = useRef(
  //   window.matchMedia(
  //     `(max-width: calc(${staticTheme.breakpoints.tablet} - 0.5px))`
  //   )
  // );

  // const mediaQuery = mediaQueryRef.current;

  // const [isMobileView, setIsMobileView] = useState(mediaQuery.matches);

  // useEffect(() => {
  //   const handleResize = (evt) => {
  //     setIsMobileView(evt.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleResize);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleResize);
  //   };
  // }, [mediaQuery]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <Mint />
      <Footer />
    </>
  );
};

export default App;

// const mediaQueryRef = useRef(
//   window.matchMedia(
//     `(max-width: calc(${staticTheme.breakpoints.mobileMax} + 0.5px))`
//   )
// );

// const mediaQuery = mediaQueryRef.current;

// const [isMobileView, setIsMobileView] = useState(mediaQuery.matches);
// const [showSideBar, setShowSideBar] = useState(!mediaQuery.matches);
// const [showBurger, setShowBurger] = useState(mediaQuery.matches);

// useEffect(() => {
//   const handleResize = (evt) => {
//     setIsMobileView(evt.matches);
//     // setShowSideBar(!evt.matches);
//   };

//   mediaQuery.addEventListener("change", handleResize);

//   return () => {
//     mediaQuery.removeEventListener("change", handleResize);
//   };
// }, [mediaQuery]);

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
