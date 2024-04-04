import Section from "../Section";
import MintForm from "../MintForm";
import CrossIcon from "../../assets/icons/cross.svg?react";
import * as s from "./Mint.styled";

const Mint = () => {
  return (
    <Section anchorId="mint" title="Are you in?">
      <s.TxtContent>
        <s.IconWrap>
          <CrossIcon />
        </s.IconWrap>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </s.TxtContent>
      <MintForm />
    </Section>
  );
};

export default Mint;
