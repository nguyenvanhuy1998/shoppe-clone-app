import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .min(5, 'Length from 5-160 characters')
    .max(160, 'Length from 5-160 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Length from 6-160 characters')
    .max(160, 'Length from 6-160 characters'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .min(6, 'Length from 6-160 characters')
    .max(160, 'Length from 6-160 characters')
    .oneOf([yup.ref('password')], 'Password does not match'),
});
export type AuthSchema = yup.InferType<typeof schema>;
