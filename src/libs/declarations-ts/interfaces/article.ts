export interface AuthorI {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ArticleI {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  createdAt: string;
  updatedAt: string;
  author: AuthorI;
}

export interface ArticlesI {
  articles: ArticleI[];
  articlesCount: number;
}
