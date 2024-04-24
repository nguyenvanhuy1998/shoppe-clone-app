import * as yup from 'yup';
import {schema} from '../utils';
export type AuthStackNavigatorParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
export type AuthSchema = yup.InferType<typeof schema>;
