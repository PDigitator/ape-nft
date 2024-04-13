import LogoIcon from "/src/assets/icons/logo.svg?react";
import * as s from "./Logo.styled";

const Logo = ({ variant }) => {
  return (
    <a href="/" aria-label="Company logo">
      <s.LogoWrap variant={variant}>
        <LogoIcon />
      </s.LogoWrap>
    </a>
  );
};

export default Logo;
