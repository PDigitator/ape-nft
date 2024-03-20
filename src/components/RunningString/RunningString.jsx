import { useRef } from "react";
import * as s from "./RunningString.styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CrossIcon from "../../assets/icons/cross.svg?react";

const RunningText = () => {
  const textRef = useRef(null);
  const spanRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { x: 0 },
      {
        x: -spanRef.current.clientWidth,
        duration: 30,
        repeat: -1,
        ease: "none",
      }
    );
  });

  return (
    <s.Wrap className="container">
      <s.Text className="text" ref={textRef}>
        <s.Span ref={spanRef}>Destroy stereotypes</s.Span>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        <s.Span>Have No Limits</s.Span>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        <s.Span>Break rules</s.Span>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        <s.Span>Destroy stereotypes</s.Span>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        <s.Span>Have No Limits</s.Span>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        <s.Span>Break rules</s.Span>
      </s.Text>
    </s.Wrap>
  );
};

export default RunningText;
