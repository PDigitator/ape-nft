import LogoIcon from "/public/assets/icons/logo.svg?react";
import * as s from "./Logo.styled";

const Logo = ({ type }) => {
  return (
    <a href="/" aria-label="Company logo">
      <s.LogoWrap type={type}>
        <LogoIcon />
      </s.LogoWrap>
    </a>
  );
};

export default Logo;
