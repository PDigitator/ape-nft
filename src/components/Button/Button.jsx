import * as s from "./Button.styled";

const Button = ({ name, type, text, onClick }) => {
  let BtnComponent;

  switch (name) {
    case "menu":
      BtnComponent = (
        <s.BtnMenu type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnMenu>
      );
      break;

    case "modal":
      BtnComponent = (
        <s.BtnModal type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnModal>
      );
      break;

    case "slider":
      BtnComponent = (
        <s.BtnSlider type={type} onClick={onClick} aria-label={text}>
          {text && text}
        </s.BtnSlider>
      );
      break;

    case "form":
      BtnComponent = (
        <s.BtnForm type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnForm>
      );
      break;

    default:
      BtnComponent = (
        <s.Btn type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.Btn>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

export default Button;
