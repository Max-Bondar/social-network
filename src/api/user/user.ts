import { AxiosPromise, AxiosInstance } from 'axios';
import { UserI } from 'libs/declarations-ts';
import { UpdateUserDTO } from './user.d';

type UserResponseT = {
  user: UserI;
};

export const initGetLoggedUserApi = (axios: AxiosInstance) => (): AxiosPromise<
  UserResponseT
> => {
  return axios.get(`/api/user`);
};

export const initUpdateUserApi = (axios: AxiosInstance) => (
  user: UpdateUserDTO
): AxiosPromise<UserResponseT> => {
  return axios.put(`/api/user`, user);
};
