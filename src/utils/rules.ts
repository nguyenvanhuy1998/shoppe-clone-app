import {type RegisterOptions, UseFormGetValues} from 'react-hook-form';

type Rules = {
  [key in 'email' | 'password' | 'confirmPassword']?: RegisterOptions;
};
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email address',
    },
    minLength: {
      value: 5,
      message: 'Length from 5-160 characters',
    },
    maxLength: {
      value: 160,
      message: 'Length from 5-160 characters',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 6,
      message: 'Length from 6-160 characters',
    },
    maxLength: {
      value: 160,
      message: 'Length from 6-160 characters',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm password is required',
    },
    minLength: {
      value: 6,
      message: 'Length from 6-160 characters',
    },
    maxLength: {
      value: 160,
      message: 'Length from 6-160 characters',
    },
    validate:
      typeof getValues === 'function'
        ? value => value === getValues('password') || 'Password does not match'
        : undefined,
  },
});
