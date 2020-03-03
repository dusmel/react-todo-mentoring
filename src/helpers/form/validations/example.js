import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .required()
    .min(5)
    .email(),
  password: yup
    .string()
    .min(5)
    .required(),
  test: yup
    .string()
    .min(5)
    .required(),
});
