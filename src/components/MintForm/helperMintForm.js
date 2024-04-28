import * as Yup from "yup";

const regx = {
  userName: /^@[a-zA-Z0-9]+$/,
  walletAddress: /^[a-zA-Z0-9]+$/,
};

const userName = Yup.string()
  .transform((value) => value.trim())
  .min(2, "At least 2 characters")
  .matches(regx.userName, "Starts with '@'")
  .required("Wrong discord");

const walletAddress = Yup.string()
  .transform((value) => value.trim())
  .length(19, "Exactly 19 characters")
  .matches(regx.walletAddress, "Only letters and digits")
  .required("Wrong address");

export const schemas = {
  custom: Yup.object().shape({
    userName,
    walletAddress,
  }),
};

export const initialValues = {
  userName: "",
  walletAddress: "",
};
