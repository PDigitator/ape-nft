import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import Slider from "../Slider";
import Card from "../Card";
import { cardsMindMapData } from "../../data/cardsMindMapData";
import { staticTheme } from "../../theme";
import * as s from "./MindMap.styled";

const MindMap = () => {
  const mediaQueryRef = useRef(
    window.matchMedia(`(min-width: calc(${staticTheme.breakpoints.tablet}))`)
  );
  const mediaQuery = mediaQueryRef.current;

  const [isTabletView, setIsTabletView] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = (evt) => {
      setIsTabletView(evt.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [mediaQuery]);

  const cardsData = [...cardsMindMapData];

  const renderCards = cardsData.map((card) => (
    <li key={card.id}>
      <Card card={card} />
    </li>
  ));

  return (
    <Section anchorId="mind-map" title="Mind map">
      {isTabletView ? (
        <s.List>{renderCards}</s.List>
      ) : (
        <Slider cardsData={cardsData} />
      )}
    </Section>
  );
};

export default MindMap;
