import { useState, useEffect } from 'react';
import { useStateQueryString } from 'hooks';

type UseTabsPropsT = {
  defaultActiveTab?: number;
};

type UseTabsT = {
  activeTab: number;
  onChangeTab: (index: number) => void;
};

export const useTabs = ({ defaultActiveTab = 0 }: UseTabsPropsT): UseTabsT => {
  const { queryParams, forceUpdate, update } = useStateQueryString();
  const [activeTab, setTabIndex] = useState(defaultActiveTab);

  const onChangeTab = (index: number) => {
    setTabIndex(index);

    if (activeTab === index) {
      update({ activeTab: index });
      return;
    }

    forceUpdate({ activeTab: index });
  };

  useEffect(
    () =>
      setTabIndex(
        queryParams.activeTab ? Number(queryParams.activeTab) : defaultActiveTab
      ),
    [queryParams.activeTab]
  );

  return {
    activeTab,
    onChangeTab,
  };
};
