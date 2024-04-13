import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import ModalMenu from "../ModalMenu";
import BurgerMenu from "../BurgerMenu";
import { staticTheme } from "../../theme";
import * as s from "./NavMenu.styled";

const NavMenu = () => {
  const mediaQueryRef = useRef(
    window.matchMedia(`(max-width: calc(${staticTheme.breakpoints.mobileMax}))`)
  );
  const mediaQuery = mediaQueryRef.current;

  const [isMobileView, setIsMobileView] = useState(mediaQuery.matches);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = (evt) => {
      setIsMobileView(evt.matches);
    };
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [mediaQuery]);

  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      {showMenu && isMobileView && (
        <Modal isOpen={showMenu}>
          <ModalMenu onClose={toggleMenu} />
        </Modal>
      )}
      <s.BurgerWrap>
        {showMenu && !isMobileView && (
          <BurgerMenu variant="header" onClick={toggleMenu} />
        )}
        <Button
          name="menu"
          type="button"
          text={!showMenu ? "Menu" : "Close"}
          onClick={toggleMenu}
        />
      </s.BurgerWrap>
    </>
  );
};

export default NavMenu;
