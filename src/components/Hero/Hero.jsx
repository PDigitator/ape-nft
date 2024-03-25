import { useState, useEffect, useRef } from "react";
import HeroImg from "../HeroImg";
import HeroBgr from "../HeroBgr";
import { staticTheme } from "../../theme";
import * as s from "./Hero.styled";

const Hero = () => {
  const mediaQueryRef = useRef(
    window.matchMedia(`(min-width: calc(${staticTheme.breakpoints.desktop}))`)
  );
  const mediaQuery = mediaQueryRef.current;

  const [isDesktopView, setIsDesktopView] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = (evt) => {
      setIsDesktopView(evt.matches);
    };
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [mediaQuery]);

  return (
    <s.HeroWrap>
      <s.HeroContainer>
        <HeroBgr>
          <s.ContentWrap>
            <s.TitleContainer>
              <s.TopTxt>diD yOu seE iT ?</s.TopTxt>
              <s.Title>Yacht Apes</s.Title>
              <s.TopTxt type="second">diD yOu seE iT ?</s.TopTxt>
            </s.TitleContainer>
            {isDesktopView && <HeroImg />}
            <s.BotoomConteiner>
              <s.NavLink href="#mint" aria-label="Scroll Contact Us section">
                Meet Apes
              </s.NavLink>
              <s.BottomTxt>
                Yacht Ape Is A Collection Of Unique Digital Apes That You Can
                Own In NFT Format
              </s.BottomTxt>
            </s.BotoomConteiner>
          </s.ContentWrap>
        </HeroBgr>
      </s.HeroContainer>
    </s.HeroWrap>
  );
};

export default Hero;
