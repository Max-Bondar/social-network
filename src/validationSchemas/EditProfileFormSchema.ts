import * as yup from 'yup';
import { commonErrorMessages } from './commonErrorMessages';

export default yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(() => commonErrorMessages.emailNotValid)
    .required(() => commonErrorMessages.emailRequired),
  username: yup
    .string()
    .trim()
    .required(() => commonErrorMessages.usernameRequired),
  password: yup
    .string()
    .trim()
    .required(() => commonErrorMessages.passwordMinLength)
    .min(8, () => commonErrorMessages.passwordMinLength),
});
