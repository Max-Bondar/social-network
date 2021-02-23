import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApi, useNotifDataFetch, useDataFetch, useGoToRoute } from 'hooks';
import { AuthContext } from 'contexts/AuthContext';
import { ArticleI, CommentI } from 'libs/declarations-ts';
import { CommentDTO } from 'api/comments/comments';
import { ArticleDTO } from 'api/articles/articles.d';

type UseArticleT = {
  article: ArticleI;
  isLoadingArticle: boolean;
  isLoggedUserArticle: boolean;
  isLoggedIn: boolean;
  isPostCommentLoading: boolean;
  comments: CommentI[];
  loggedUserName: string;
  isDeletingArticle: boolean;
  createComment: (comment: CommentDTO) => void;
  deleteComment: (id: number) => void;
  deleteArticle: () => void;
  updateArticle: (article: ArticleDTO) => void;
};

const defaultArticle: ArticleI = {
  author: { username: '', image: '', following: false, bio: '' },
  createdAt: '',
  description: '',
  favorited: false,
  favoritesCount: 0,
  title: '',
  tagList: [],
  slug: '',
  updatedAt: '',
  body: '',
};

export const useArticle = (): UseArticleT => {
  const {
    getArticleApi,
    getCommentsApi,
    createCommentApi,
    deleteCommentApi,
    deleteArticleApi,
    updateArticleApi,
  } = useApi();
  const { user, isLoggedIn } = useContext(AuthContext);
  const { slug } = useParams<any>();
  const [comments, setComments] = useState<CommentI[]>([]);
  const [article, setArticle] = useState<ArticleI>(defaultArticle);
  const { goToProfile } = useGoToRoute();

  const [articleRes, fetchArticle] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await getArticleApi(slug);
      setArticle(res.data.article);
      return res;
    },
    isLazy: true,
    initialData: {
      article: defaultArticle,
    },
  });

  const [, fetchComments] = useDataFetch({
    fetchHandler: async () => {
      const res = await getCommentsApi(slug);
      setComments(res.data.comments);
      return res;
    },
    initialData: [],
  });

  const [createCommentRes, createComment] = useDataFetch({
    fetchHandler: async (comment: CommentDTO) => {
      const res = await createCommentApi(slug, comment);

      fetchComments();
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  const [, deleteComment] = useDataFetch({
    fetchHandler: async (id: number) => {
      const res = await deleteCommentApi(slug, id);
      fetchComments();
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  const [deleteArticleRes, deleteArticle] = useDataFetch({
    fetchHandler: async () => {
      const res = await deleteArticleApi(slug);
      goToProfile(user.username);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  const [, updateArticle] = useNotifDataFetch({
    fetchHandler: async (article: ArticleDTO) => {
      const res = await updateArticleApi(slug, article);
      setArticle(res.data.article);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  const isLoggedUserArticle = !Boolean(
    user?.username.localeCompare(article.author.username)
  );

  useEffect(() => {
    fetchArticle();
  }, [JSON.stringify(slug)]);

  return {
    article,
    comments,
    isLoggedUserArticle,
    isLoggedIn,
    isLoadingArticle: articleRes.isLoading,
    isPostCommentLoading: createCommentRes.isLoading,
    isDeletingArticle: deleteArticleRes.isLoading,
    loggedUserName: user?.username,
    createComment,
    deleteComment,
    deleteArticle,
    updateArticle,
  };
};
