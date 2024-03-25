import styled from "styled-components";
import { staticTheme } from "../../theme";

export const HeroWrap = styled.section`
  padding: 54px 0 30px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 54px 0 40px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 16px 0 60px;
  }
`;

export const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0 8px;

  @media screen and (min-width: calc(${staticTheme.breakpoints.mobileMax} )) {
    padding: 0 calc((100vw - 464px) / 2);
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    padding: 0 calc((100vw - 736px) / 2);
    border-radius: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 0 16px;
    border-radius: 24px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktopMax}) {
    padding: 0 calc((100vw - 1408px) / 2);
  }
`;

export const BgrWrap = styled.div`
  display: flex;
  justify-content: center;
  min-height: 542px;
  padding: 36px 63px 19px;
  border-radius: 8px;
  background-color: ${staticTheme.colors.bgAccent};

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    min-height: 421px;
    padding: 35px 63px 35px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-height: 677px;
    padding: 35px 100px 35px;
    border-radius: 24px;
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  height: 487px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    height: 351px;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    height: 607px;
  }
`;

export const TitleContainer = styled.div``; //!

export const TopTxt = styled.h3`
  color: ${staticTheme.colors.txtSecondary};
  font-family: ${staticTheme.fonts.fontAccent};
  font-size: 16px;
  line-height: calc(27 / 16);
  text-align: center;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: calc(33 / 20);
    text-align: left;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: calc(40 / 24);
    text-indent: ${(props) => (props.type === "second" ? "120px" : "0")};
  }
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  color: ${staticTheme.colors.txtSecondary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 44px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    margin-bottom: 16px;
    font-size: 92px;
    letter-spacing: 0.92px;
    text-align: left;
    word-spacing: 165px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    margin-bottom: 30px;
    font-size: 164px;
    word-spacing: 272px;
  }
`;

export const BotoomConteiner = styled.div`
  width: 217px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    position: absolute;
    z-index: 1000;
    bottom: 0;
    right: 0;

    width: 190px;
    flex-direction: column-reverse;
    gap: 16px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    width: 337px;
    bottom: 46px;
    gap: 28px;
    text-align: justify;
    white-space: pre-wrap;
  }
`;

export const NavLink = styled.a`
  display: block;
  margin: 0 auto;
  min-width: 216px;
  padding: 10px 0 12px;

  border-radius: 8px;
  background-color: ${staticTheme.colors.bgNavPrimary};
  backdrop-filter: ${staticTheme.filters.backdrop};

  color: ${staticTheme.colors.txtSecondary};
  font-family: ${staticTheme.fonts.fontTitle};
  font-size: 16px;
  font-weight: 900;
  line-height: calc(19 / 16);
  text-transform: uppercase;
  text-align: center;

  &:hover,
  &:focus {
    color: ${staticTheme.colors.txtPrimary};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    min-width: 190px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 337px;
    padding: 16px 0 20px;

    border-radius: 12px;

    font-size: 28px;
    line-height: calc(34 / 28);
  }
`;

export const BottomTxt = styled.p`
  color: ${staticTheme.colors.txtSecondary};
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    text-indent: 77px;
    text-align: justify;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    text-indent: 83px;

    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;
