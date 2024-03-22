import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { Report } from "notiflix/build/notiflix-report-aio";
import { staticTheme } from "../../theme";

export const MForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

export const FieldWrap = styled.div`
  position: relative;
  display: flex;

  @media screen and (min-width: ${staticTheme.breakpoints.tablet}) {
    max-width: 248px;
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    min-width: 397px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;
  border-radius: 8px 0px 0px 8px;
  background-color: ${staticTheme.colors.bgSecondary};
  backdrop-filter: ${staticTheme.filters.backdrop};

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 20px;
    border-radius: 12px 0px 0px 12px;
  }
`;

export const IconWrap = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  color: ${staticTheme.colors.discord};
`;

export const FieldInput = styled(Field)`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  border-radius: 0px 8px 8px 0px;
  outline: none;
  background-color: transparent;

  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  color: ${(props) =>
    !props.active && props.empty && !props.error
      ? staticTheme.colors.txtSecondary
      : !props.active && props.error
      ? staticTheme.colors.txtAccent
      : props.active && props.error
      ? staticTheme.colors.txtAccent
      : staticTheme.colors.txtPrimary};

  border: 1px solid
    ${(props) =>
      // !props.active && props.empty && !props.error
      //   ? staticTheme.colors.txtSecondary
      //   : !props.active && !props.empty
      //   ? props.error
      //     ? staticTheme.colors.txtAccent
      //     : staticTheme.colors.txtPrimary
      //   : props.active && !props.empty
      //   ? props.error
      //     ? staticTheme.colors.txtAccent
      //     : staticTheme.colors.txtPrimary
      //   : "green"};
      !props.active && props.empty && !props.error
        ? staticTheme.colors.txtSecondary
        : !props.active && props.error
        ? staticTheme.colors.txtAccent
        : props.active && props.error
        ? staticTheme.colors.txtAccent
        : staticTheme.colors.txtPrimary};

  /* color: ${(props) =>
    props.error ? staticTheme.colors.txtAccent : staticTheme.colors.txtPrimary};

  border: 1px solid
    ${(props) =>
    props.error
      ? staticTheme.colors.txtAccent
      : staticTheme.colors.txtPrimary}; */

  &:hover,
  &:focus {
    color: ${(props) =>
      props.error
        ? staticTheme.colors.txtAccent
        : staticTheme.colors.txtPrimary};

    border: 1px solid
      ${(props) =>
        props.error
          ? staticTheme.colors.txtAccent
          : staticTheme.colors.txtPrimary};
  }

  /* &:disabled {
    color: ${staticTheme.colors.txtPlaceholder};
    border: 1px solid ${staticTheme.colors.txtPlaceholder};
  } */

  &::placeholder {
    color: ${staticTheme.colors.txtPlaceholder};
  }

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    padding: 21px 24px;
    border-radius: 0px 12px 12px 0px;
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -12px;
  right: 0;

  color: ${staticTheme.colors.txtAccent};
  font-family: ${staticTheme.fonts.fontPrimary};
  font-size: 10px;
  line-height: calc(12 / 10);
  text-transform: uppercase;

  /* visibility: ${({ visible }) => (visible ? "visible" : "hidden")}; //! */

  @media screen and (min-width: ${staticTheme.breakpoints.desktop}) {
    bottom: -16px;
    font-size: 12px;
    line-height: calc(14 / 12);
  }
`;

Report.init({
  fontFamily: `${staticTheme.fonts.fontPrimary}`,
  backgroundColor: `${staticTheme.colors.fontPrimary}`,
  titleFontSize: "24px",
  messageFontSize: "20px",
  success: {
    svgColor: `${staticTheme.colors.txtSecondary}`,
    titleColor: `${staticTheme.colors.txtSecondary}`,
    messageColor: `${staticTheme.colors.txtSecondary}`,
    buttonBackground: `${staticTheme.colors.bgAccent}`,
    buttonColor: `${staticTheme.colors.txtSecondary}`,
    backOverlayColor: `${staticTheme.colors.bgNavSecondary}`,
  },
});
