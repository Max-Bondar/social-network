import axios, { AxiosPromise, AxiosInstance } from 'axios';
import { ProfileI } from 'libs/declarations-ts';

type ProfileResponseT = {
  profile: ProfileI;
};

export const initGetProfileApi = (baseUrl: string) => (
  username: string
): AxiosPromise<ProfileResponseT> => {
  return axios.get(`${baseUrl}/api/profiles/${username}`);
};

export const initGetFollowProfileApi = (axios: AxiosInstance) => (
  username: string
): AxiosPromise<ProfileResponseT> => {
  return axios.post(`/api/profiles/${username}/follow`);
};

export const initDeleteUnfollowProfileApi = (axios: AxiosInstance) => (
  username: string
): AxiosPromise<ProfileResponseT> => {
  return axios.delete(`/api/profiles/${username}/follow`);
};
