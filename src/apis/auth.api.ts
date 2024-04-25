import {AuthResponse} from '../types/auth.type';
import {http} from '../utils';

export const registerAccount = (body: {email: string; password: string}) =>
  http.post<AuthResponse>('/registerr', body);
