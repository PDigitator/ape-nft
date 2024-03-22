import { Formik } from "formik";
import { Report } from "notiflix/build/notiflix-report-aio";

import { initialValues, schemas } from "./helper.js";
import Button from "../Button";
import DiscordIcon from "../../assets/icons/discord.svg?react";
import MetaMaskIcon from "../../assets/icons/metamask.svg?react";
import * as s from "./MintForm.styled";

const MintForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    const user = values.userName.trim().replace("@", "");

    Report.success(`Congrats ${user}!`, `Welcome aboard!`, "Ok", () => {
      resetForm();
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
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
              // disabled={isSubmitting}
              // active={touched.userName ? "true" : undefined}
              // value={values.userName}
            />
            {errors.userName && touched.userName && (
              <s.Error name="userName" component="div" />
            )}
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
              // disabled={isSubmitting}
              // active={touched.walletAddress ? "true" : undefined}
            />
            {errors.walletAddress && touched.walletAddress && (
              <s.Error name="walletAddress" component="div" />
            )}
          </s.FieldWrap>

          <Button
            name="form"
            type="submit"
            text={
              isSubmitting
                ? "Minted"
                : Object.keys(errors).length > 0
                ? "Error"
                : "Mint"
            }
            disabled={isSubmitting}
          />
        </s.MForm>
      )}
    </Formik>
  );
};

export default MintForm;
