import axios, { AxiosPromise } from 'axios';
import { TagsI } from 'libs/declarations-ts';

type TagsResponseT = TagsI;

export const initGetTagsApi = (baseUrl: string) => (): AxiosPromise<
  TagsResponseT
> => {
  return axios.get(`${baseUrl}/api/tags`);
};
