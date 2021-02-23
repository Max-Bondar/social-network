import { AuthorI } from './article';

export interface CommentI {
  id: number;
  body: string;
  author: AuthorI;
  createdAt: string;
  updatedAt: string;
}
