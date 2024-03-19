import Section from "../Section";
import Button from "../Button";
// import * as s from "./Mint.styled";

const Mint = () => {
  const onClick = () => {
    console.log("onClick");
  }; //!

  return (
    <Section anchorId="mint" title="Are you in?">
      <p>Mint</p>
      <Button name="menu" type="button" text="Menu" onClick={onClick}></Button>

      <Button name="modal" type="button" text="Menu" onClick={onClick}></Button>

      <Button name="form" type="button" text="Mint" onClick={onClick}></Button>
    </Section>
  );
};

export default Mint;
