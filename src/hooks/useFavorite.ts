import { useState } from 'react';
import { useApi, useNotifDataFetch } from 'hooks';
import { ArticleI } from 'libs/declarations-ts';

type useFavoriteT = {
  isLoading: boolean;
  article: ArticleI;
  onClickLike: () => void;
};

const defaultArticle = {} as ArticleI;
const notifErrorMessage = 'Authentication required. Please Login';

export const useFavorite = (slug: string): useFavoriteT => {
  const { likeFavoriteArticleApi, removeLikeFavoriteArticleApi } = useApi();
  const [isFavoritePost, setIsFavorite] = useState(false);
  const [article, setIsArticle] = useState<ArticleI>(defaultArticle);

  const [likeRes, likeFavoriteArticle] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await likeFavoriteArticleApi(slug);
      setIsFavorite(true);
      setIsArticle(res.data.article);
      return res;
    },
    notifErrorMessage,
    isLazy: true,
  });

  const [removeLikeRes, removeLikeFavoriteArticle] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await removeLikeFavoriteArticleApi(slug);
      setIsFavorite(false);
      setIsArticle(res.data.article);
      return res;
    },
    notifErrorMessage,
    isLazy: true,
  });

  const onClickLike = () => {
    if (isFavoritePost) {
      removeLikeFavoriteArticle();

      return;
    }

    likeFavoriteArticle();
  };

  return {
    article,
    isLoading: likeRes.isLoading || removeLikeRes.isLoading,
    onClickLike,
  };
};
