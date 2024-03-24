// import { useEffect } from "react";

import { createPortal } from "react-dom";

import * as s from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ isOpen, children }) => {
  return createPortal(
    <s.Overlay>
      <s.ModalWrap isOpen={isOpen}>{children}</s.ModalWrap>
    </s.Overlay>,

    modalRoot
  );
};

export default Modal;
