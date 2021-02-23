import { ArticlesI, ArticleI } from 'libs/declarations-ts/interfaces/article';

export type ArticlesResponseT = ArticlesI;

export type ArticleResponseT = {
  article: ArticleI;
};

export type ArticleDTO = {
  article: {
    title?: string;
    body?: string;
    description?: string;
    tagList?: string[];
  };
};
