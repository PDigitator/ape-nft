import Section from "../Section";
import Slider from "../Slider";
import { slidesMindMapData } from "../../data/slidesMindMapData";
// import * as s from "./MindMap.styled";

const MindMap = () => {
  return (
    <Section anchorId="mind-map" title="Car">
      <p>MindMap</p>
      <Slider slidesData={slidesMindMapData} />
    </Section>
  );
};

export default MindMap;

// twitter.com / apenftorg;
