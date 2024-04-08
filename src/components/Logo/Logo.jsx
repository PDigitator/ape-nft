import LogoIcon from "/src/assets/icons/logo.svg?react";
import * as s from "./Logo.styled";

const Logo = ({ kind }) => {
  return (
    <a href="/" aria-label="Company logo">
      <s.LogoWrap kind={kind}>
        <LogoIcon />
      </s.LogoWrap>
    </a>
  );
};

export default Logo;
