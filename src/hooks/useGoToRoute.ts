import { useHistory } from 'react-router-dom';
import { stringifyToQueryString } from 'libs/helpers';
import { ProfilePageQueryI } from 'libs/declarations-ts';

export const useGoToRoute = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegistration = () => {
    history.push('/register');
  };

  const goToArticle = (slug: string) => {
    history.push(`/articles/${slug}`);
  };

  const goToProfile = (username: string) => {
    const defaultQueryParams: Pick<
      ProfilePageQueryI,
      'activeTab' | 'author'
    > = {
      activeTab: 0,
      author: username,
    };

    history.push({
      pathname: `/profiles/${username}`,
      search: stringifyToQueryString(defaultQueryParams),
    });
  };

  const goToNotFound = () => {
    history.push('/not-found');
  };

  const goToServerError = () => {
    history.push('/server-error');
  };

  const goToHomePage = () => {
    history.push('/');
  };

  return {
    goToNotFound,
    goToServerError,
    goToHomePage,
    goToLogin,
    goToArticle,
    goToProfile,
    goToRegistration,
  };
};
