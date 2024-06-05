import * as yup from 'yup';

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const {price_max, price_min} = this.parent as {
    price_min: string;
    price_max: string;
  };
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min);
  }
  return true;
}
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
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá tối thiểu phải nhỏ hơn giá tối đa',
    test: testPriceMinMax,
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá tối thiểu phải nhỏ hơn giá tối đa',
    test: testPriceMinMax,
  }),
});
export type AuthSchema = yup.InferType<typeof schema>;
