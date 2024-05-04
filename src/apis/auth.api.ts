import {path} from '../constants';
import {AuthResponse} from '../types/auth.type';
import {http} from '../utils';

export const registerAccount = (body: {email: string; password: string}) =>
  http.post<AuthResponse>(path.register, body);
export const login = (body: {email: string; password: string}) =>
  http.post<AuthResponse>(path.login, body);
export const logout = () => http.post(path.logout);
