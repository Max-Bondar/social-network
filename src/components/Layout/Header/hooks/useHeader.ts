import { useContext } from 'react';
import { useApi, useDataFetch } from 'hooks';
import { useGoToRoute } from 'hooks/useGoToRoute';
import { ArticleDTO } from 'api/articles/articles.d';
import { AuthContext } from 'contexts/AuthContext';

type useHeaderT = {
  isLoggedIn: boolean;
  name: string;
  avatar: string;
  createArticle: (article: ArticleDTO) => void;
  setLogoutCtx: () => void;
};

const useHeader = (): useHeaderT => {
  const { isLoggedIn, user, setLogoutCtx } = useContext(AuthContext);
  const { createNewArticleApi } = useApi();
  const { goToArticle } = useGoToRoute();

  const [, createArticle] = useDataFetch({
    fetchHandler: async (article: ArticleDTO) => {
      const res = await createNewArticleApi(article);
      goToArticle(res.data.article.slug);

      return res;
    },
    isLazy: true,
  });

  return {
    createArticle,
    isLoggedIn,
    name: user.username,
    avatar: user.image,
    setLogoutCtx,
  };
};

export default useHeader;
