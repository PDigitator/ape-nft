import { useState } from "react";
import { Formik } from "formik";
import { Report } from "notiflix/build/notiflix-report-aio";

import { initialValues, schemas } from "./helperMintForm.js";
import Button from "../Button";
import DiscordIcon from "../../assets/icons/discord.svg?react";
import MetaMaskIcon from "../../assets/icons/metamask.svg?react";
import * as s from "./MintForm.styled";

const MintForm = () => {
  const [buttonText, setButtonText] = useState("Mint");
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (values, { resetForm }) => {
    const user = values.userName.trim().replace("@", "");
    await sleep(1000);
    setButtonText("Minted");
    resetForm();
    Report.success(`Congrats ${user}!`, `Welcome aboard!`, "Ok", () => {
      setButtonText("Mint");
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={handleSubmit}
      validateOnBlur={false}
    >
      {({ values, errors, touched, isValid, isSubmitting, setFieldValue }) => (
        <s.MForm autoComplete="off">
          <s.FieldWrap>
            <s.IconContainer>
              <s.IconWrap>
                <DiscordIcon />
              </s.IconWrap>
            </s.IconContainer>

            <s.FieldInput
              name="userName"
              placeholder="@username"
              error={errors.userName && touched.userName ? "true" : undefined}
              active={touched.userName ? "true" : undefined}
              empty={!values.userName ? "true" : undefined}
              onChange={(e) => {
                setFieldValue("userName", e.target.value);
                if (!isValid && buttonText === "Error") {
                  setButtonText("Mint");
                }
              }}
            />
            {errors.userName && <s.Error name="userName" component="div" />}
          </s.FieldWrap>

          <s.FieldWrap>
            <s.IconContainer>
              <s.IconWrap>
                <MetaMaskIcon />
              </s.IconWrap>
            </s.IconContainer>

            <s.FieldInput
              name="walletAddress"
              placeholder="Wallet address"
              error={
                errors.walletAddress && touched.walletAddress
                  ? "true"
                  : undefined
              }
              active={touched.walletAddress ? "true" : undefined}
              empty={!values.walletAddress ? "true" : undefined}
              onChange={(e) => {
                setFieldValue("walletAddress", e.target.value);
                if (!isValid && buttonText === "Error") {
                  setButtonText("Mint");
                }
              }}
            />
            {errors.walletAddress && (
              <s.Error name="walletAddress" component="div" />
            )}
          </s.FieldWrap>

          <Button
            name="form"
            type="submit"
            text={buttonText}
            onClick={() => {
              if (!isValid) {
                setButtonText("Error");
              }
            }}
            disabled={isSubmitting}
          />
        </s.MForm>
      )}
    </Formik>
  );
};

export default MintForm;
