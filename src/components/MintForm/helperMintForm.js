import * as Yup from "yup";

const regx = {
  userName: /^@[a-zA-Z0-9]+$/,
  walletAddress: /^[a-zA-Z0-9]+$/,
};

const userName = Yup.string()
  .transform((value) => value.trim())
  .min(2, "Wrong discord")
  .matches(regx.userName, "Wrong discord")
  .required("Wrong discord");

const walletAddress = Yup.string()
  .transform((value) => value.trim())
  .length(19, "Wrong address")
  .matches(regx.walletAddress, "Wrong address")
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
