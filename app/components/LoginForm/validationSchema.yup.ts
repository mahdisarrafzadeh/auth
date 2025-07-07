import { object, string } from "yup";

import { PHONE_ERROR_MESSAGE, regex, TEXTS } from "@/constants";

export const validationSchema = object({
  phoneNumber: string()
    .required(TEXTS.login.phoneRequired)
    .matches(regex.phone, PHONE_ERROR_MESSAGE),
});
