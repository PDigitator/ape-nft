import Logo from "../Logo";
import NavMenu from "../NavMenu";
import SocialMenu from "../SocialMenu";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.HeaderWrap>
      <s.HeaderContainer>
        <s.Wrap>
          <Logo kind="header" />
          <NavMenu />
        </s.Wrap>
        <SocialMenu kind="header" />
      </s.HeaderContainer>
    </s.HeaderWrap>
  );
};

export default Header;
