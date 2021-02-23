import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import { initUserLoginApi, initUserSignupApi } from '../api/auth/auth';
import { initGetLoggedUserApi, initUpdateUserApi } from '../api/user/user';
import { initGetTagsApi } from '../api/tags/tags';
import {
  initGetProfileApi,
  initGetFollowProfileApi,
  initDeleteUnfollowProfileApi,
} from '../api/profile/profile';
import {
  initGetArticlesApi,
  initGetFeedArticlesApi,
  initPostFavoriteArticleApi,
  initDeleteFavoriteArticleApi,
  initGetArticleApi,
  initDeleteArticleApi,
  initUpdateArticleApi,
  initPostNewArticleApi,
} from '../api/articles/articles';
import {
  initGetCommentsApi,
  initCreateCommentApi,
  initDeleteCommentApi,
} from '../api/comments/comments';

export const useApi = () => {
  const { accessToken } = useContext(AuthContext);
  const baseURL = 'https://conduit.productionready.io';

  const authInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Token ${accessToken}`,
    },
  });

  return {
    // Auth
    loginUserApi: initUserLoginApi(baseURL),
    createUserApi: initUserSignupApi(baseURL),

    // User
    getUserApi: initGetLoggedUserApi(authInstance),
    updateUserProfileApi: initUpdateUserApi(authInstance),

    // Tags
    getTagsApi: initGetTagsApi(baseURL),

    // Profile
    getProfileApi: initGetProfileApi(baseURL),
    followProfileApi: initGetFollowProfileApi(authInstance),
    unfollowProfileApi: initDeleteUnfollowProfileApi(authInstance),

    // Articles
    getArticlesApi: initGetArticlesApi(baseURL),
    getFeedArticlesApi: initGetFeedArticlesApi(authInstance),
    getArticleApi: initGetArticleApi(baseURL),
    likeFavoriteArticleApi: initPostFavoriteArticleApi(authInstance),
    removeLikeFavoriteArticleApi: initDeleteFavoriteArticleApi(authInstance),
    deleteArticleApi: initDeleteArticleApi(authInstance),
    updateArticleApi: initUpdateArticleApi(authInstance),
    createNewArticleApi: initPostNewArticleApi(authInstance),

    //Comments
    getCommentsApi: initGetCommentsApi(baseURL),
    createCommentApi: initCreateCommentApi(authInstance),
    deleteCommentApi: initDeleteCommentApi(authInstance),
  };
};
