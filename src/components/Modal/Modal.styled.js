import styled, { keyframes } from "styled-components";
import { staticTheme } from "../../theme";

export const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${staticTheme.colors.bgSecondary};
`;

const slidein = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

const slideout = keyframes`
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
`;

export const ModalWrap = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 62px calc((100vw - 216px) / 2);

  background-color: ${staticTheme.colors.bgSecondary};

  animation: ${({ isOpen }) => (isOpen ? slidein : slideout)} 250ms
    ${staticTheme.timingFunction.cubicBezier};
`;
