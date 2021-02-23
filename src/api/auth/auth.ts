import axios, { AxiosPromise } from 'axios';
import { LoginUserDTO, SignupUserDTO, AuthResponseT } from './auth.d';

export const initUserLoginApi = (baseUrl: string) => (
  user: LoginUserDTO
): AxiosPromise<AuthResponseT> =>
  axios.post(`${baseUrl}/api/users/login`, user);

export const initUserSignupApi = (baseUrl: string) => (
  user: SignupUserDTO
): AxiosPromise<AuthResponseT> => axios.post(`${baseUrl}/api/users`, user);
