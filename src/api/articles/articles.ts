import axios, { AxiosPromise, AxiosInstance } from 'axios';
import { ArticlesResponseT, ArticleResponseT, ArticleDTO } from './articles.d';

export const initGetArticlesApi = (baseUrl: string) => (
  query: object
): AxiosPromise<ArticlesResponseT> => {
  return axios.get(`${baseUrl}/api/articles`, {
    params: query,
  });
};

export const initGetFeedArticlesApi = (axios: AxiosInstance) => (
  query: object
): AxiosPromise<ArticlesResponseT> => {
  return axios.get(`/api/articles/feed`, {
    params: query,
  });
};

export const initGetArticleApi = (baseUrl: string) => (
  slug: string
): AxiosPromise<ArticleResponseT> =>
  axios.get(`${baseUrl}/api/articles/${slug}`);

export const initUpdateArticleApi = (axios: AxiosInstance) => (
  slug: string,
  article: ArticleDTO
): AxiosPromise<ArticleResponseT> =>
  axios.put(`/api/articles/${slug}`, article);

export const initPostNewArticleApi = (axios: AxiosInstance) => (
  article: ArticleDTO
): AxiosPromise<ArticleResponseT> => {
  return axios.post(`/api/articles`, article);
};

export const initDeleteArticleApi = (axios: AxiosInstance) => (
  slug: string
): AxiosPromise => axios.delete(`/api/articles/${slug}`);

export const initPostFavoriteArticleApi = (axios: AxiosInstance) => (
  slug: string
): AxiosPromise<ArticleResponseT> => {
  return axios.post(`/api/articles/${slug}/favorite`);
};

export const initDeleteFavoriteArticleApi = (axios: AxiosInstance) => (
  slug: string
): AxiosPromise<ArticleResponseT> => {
  return axios.delete(`/api/articles/${slug}/favorite`);
};
