import * as yup from 'yup';
import { commonErrorMessages } from './commonErrorMessages';

export default yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(() => commonErrorMessages.emailNotValid)
    .required(() => commonErrorMessages.emailRequired),
});
