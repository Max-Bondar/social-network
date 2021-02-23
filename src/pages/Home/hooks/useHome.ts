import { useEffect, useState } from 'react';
import omit from 'lodash/omit';
import {
  useDataFetch,
  useApi,
  useTabs,
  useStateQueryString,
  useNotifDataFetch,
} from 'hooks';
import { NON_PRINTABLE_CHARS_REGEX } from 'libs/helpers';
import { ArticleI, HomePageTabsE, HomePageQueryI } from 'libs/declarations-ts';

type useHomeT = {
  isLoading: boolean;
  activeTab: number;
  selectedTag: string;
  paginationItemsCount: number;
  articles: ArticleI[];
  onChangeTabs: (index: number) => void;
  onChangePage: (offset: number) => void;
  onClickTag: (tag: string) => void;
};

const HOME_TAB_INDEX: any = {
  0: HomePageTabsE.YOUR_FEEDS,
  1: HomePageTabsE.GLOBAL_FEEDS,
};

export const useHome = (): useHomeT => {
  const { getArticlesApi, getFeedArticlesApi } = useApi();
  const { queryParams, update, forceUpdate } = useStateQueryString<
    Readonly<HomePageQueryI>
  >();
  const [paginationItemsCount, setPaginationItemsCount] = useState(0);
  const [articles, setArticles] = useState<ArticleI[]>([]);
  const { activeTab, onChangeTab } = useTabs({ defaultActiveTab: 1 });
  const preparedQueryParams = omit(queryParams, 'activeTab');
  const [selectedTag, setSelectedTag] = useState<string>('');

  const [articlesRes, fetchArticles] = useDataFetch({
    fetchHandler: async () => {
      const res = await getArticlesApi(preparedQueryParams);

      setArticles(res.data.articles);
      setPaginationItemsCount(res.data.articlesCount);
      return res;
    },
    isLazy: true,
    initialData: [],
  });

  const [feedsRes, fetchFeedArticles] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await getFeedArticlesApi(preparedQueryParams);

      setArticles(res.data.articles);
      setPaginationItemsCount(res.data.articlesCount);
      return res;
    },
    isLazy: true,
    checkUnauthorized: true,
    isErrorToastDisabled: true,
    initialData: [],
  });

  // Handle Tabs
  const onChangeTabs = (index: number) => {
    onChangeTab(index);
  };

  // Handle Pagination
  const onChangePage = (offset: number) => {
    update({ offset });
  };

  // Handle Tags
  const onClickTag = (tag: string) => {
    // always show in 3rd tab, because we have only 2 main tabs
    const tabIndex = 2;

    onChangeTab(tabIndex);

    forceUpdate({ activeTab: tabIndex, tag });
  };

  useEffect(() => {
    setSelectedTag(queryParams.tag || '');

    if (
      HOME_TAB_INDEX[Number(queryParams.activeTab)] === HomePageTabsE.YOUR_FEEDS
    ) {
      fetchFeedArticles();
      return;
    }

    fetchArticles();
  }, [JSON.stringify(queryParams)]);

  const articlesList = articles.map(article => {
    // Clear empty tags
    const tags = article.tagList.filter((tag: string) => {
      return tag.replace(NON_PRINTABLE_CHARS_REGEX, '').length;
    });

    return { ...article, tagList: tags };
  });

  return {
    activeTab,
    selectedTag,
    paginationItemsCount,
    articles: articlesList,
    isLoading: articlesRes.isLoading || feedsRes.isLoading,
    onChangeTabs,
    onChangePage,
    onClickTag,
  };
};
