import { useEffect, useContext, useState } from 'react';
import pick from 'lodash/pick';
import { useParams } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import {
  useDataFetch,
  useApi,
  useTabs,
  useStateQueryString,
  useNotifDataFetch,
} from 'hooks';
import {
  ProfilePageTabsE,
  ProfilePageQueryI,
  ProfileI,
  ArticleI,
  UserI,
} from 'libs/declarations-ts';
import { EditProfileFormValuesT } from 'components/Forms/EditProfileForm/EditProfileForm';

type UrlParamsT = {
  username: string;
};

type LoggedUserProfileT = Pick<UserI, 'email' | 'bio' | 'image' | 'username'>;

type useProfileT = {
  isUserProfile: boolean;
  activeTab: number;
  profile: ProfileI;
  isLoadingProfile: boolean;
  isLoadingArticles: boolean;
  articles: ArticleI[];
  loggedUserProfile: LoggedUserProfileT;
  paginationItemsCount: number;
  onChangeTabs: (index: number) => void;
  onChangePage: (offset: number) => void;
  fetchProfile: () => void;
  updateUserProfile: (values: EditProfileFormValuesT) => void;
};

const PROFILE_TAB_INDEX: any = {
  0: ProfilePageTabsE.MY_POSTS,
  1: ProfilePageTabsE.FAVORITED_POSTS,
};

const defaultProfile = {} as ProfileI;

export const useProfile = (): useProfileT => {
  const { user } = useContext(AuthContext);
  const { getArticlesApi, getProfileApi, updateUserProfileApi } = useApi();
  const { onChangeTab, activeTab } = useTabs({});
  const { username } = useParams<UrlParamsT>();
  const { queryParams, update, forceUpdate } = useStateQueryString<
    Readonly<ProfilePageQueryI>
  >();
  const [profileData, setProfileData] = useState<ProfileI>(defaultProfile);

  const [profileRes, fetchProfile] = useDataFetch({
    fetchHandler: async () => {
      const res = await getProfileApi(username);
      setProfileData(res.data.profile);

      return res;
    },
    isLazy: true,
    initialData: {
      profile: defaultProfile,
    },
  });

  const [articlesRes, fetchArticles] = useDataFetch({
    fetchHandler: async () => await getArticlesApi(queryParams),
    isLazy: true,
    initialData: [],
  });

  const [userRes, updateUserProfile] = useNotifDataFetch({
    fetchHandler: async (values: EditProfileFormValuesT) => {
      const res = await updateUserProfileApi(values);
      setProfileData({
        ...pick(res.data.user, 'bio', 'image', 'username'),
        following: false,
      });

      return res;
    },
    isLazy: true,
  });

  // Handle Tabs
  const onChangeTabs = (index: number) => {
    onChangeTab(index);
    if (PROFILE_TAB_INDEX[index] === ProfilePageTabsE.MY_POSTS) {
      forceUpdate({ activeTab: index, author: username });
      return;
    }
    forceUpdate({ activeTab: index, favorited: username });
  };

  // Handle Pagination
  const onChangePage = (offset: number) => {
    update({ offset });
  };

  useEffect(() => {
    fetchProfile();
  }, [username]);

  useEffect(() => {
    fetchArticles();
  }, [JSON.stringify(queryParams)]);

  const isUserProfile = !Boolean(
    user?.username.localeCompare(profileData.username)
  );

  return {
    isUserProfile,
    activeTab,
    loggedUserProfile: {
      ...pick(user, 'email', 'bio', 'image', 'username'),
      ...pick(userRes.data.user, 'email', 'bio', 'image', 'username'),
    },
    profile: profileData,
    isLoadingProfile: profileRes.isLoading || userRes.isLoading,
    isLoadingArticles: articlesRes.isLoading,
    articles: articlesRes.data.articles,
    paginationItemsCount: articlesRes.data.articlesCount,
    onChangeTabs,
    onChangePage,
    fetchProfile,
    updateUserProfile,
  };
};
