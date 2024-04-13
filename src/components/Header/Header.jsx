import Logo from "../Logo";
import NavMenu from "../NavMenu";
import SocialMenu from "../SocialMenu";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.HeaderWrap>
      <s.HeaderContainer>
        <s.Wrap>
          <Logo variant="header" />
          <NavMenu />
        </s.Wrap>
        <SocialMenu variant="header" />
      </s.HeaderContainer>
    </s.HeaderWrap>
  );
};

export default Header;
