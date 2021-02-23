import axios, { AxiosPromise, AxiosInstance } from 'axios';
import { CommentI } from 'libs/declarations-ts';

type CommentsResponseT = {
  comments: CommentI[];
};
export type CommentDTO = {
  body: string;
};

export const initGetCommentsApi = (baseUrl: string) => (
  slug: string
): AxiosPromise<CommentsResponseT> => {
  return axios.get(`${baseUrl}/api/articles/${slug}/comments`);
};

export const initCreateCommentApi = (axios: AxiosInstance) => (
  slug: string,
  comment: CommentDTO
): AxiosPromise<CommentsResponseT> => {
  return axios.post(`/api/articles/${slug}/comments`, comment);
};

export const initDeleteCommentApi = (axios: AxiosInstance) => (
  slug: string,
  id: number
): AxiosPromise<CommentsResponseT> => {
  return axios.delete(`/api/articles/${slug}/comments/${id}`);
};
