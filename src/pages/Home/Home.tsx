import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Hero, Tags, SidebarStyled, Posts } from 'components';
import { Pagination } from 'shared-components';
import { useHome } from './hooks/useHome';
import { HomePageTabsE } from 'libs/declarations-ts';
import { ContainerWrapStyled, ContentWrapStyled } from './Home.styled';

const Home: React.FC = () => {
  const {
    articles,
    paginationItemsCount,
    activeTab,
    selectedTag,
    isLoading,
    onChangeTabs,
    onChangePage,
    onClickTag,
  } = useHome();

  const tabsCount = Boolean(selectedTag?.length) ? 3 : 2;

  return (
    <>
      <Hero />

      <ContainerWrapStyled>
        <ContentWrapStyled>
          <Tabs onSelect={onChangeTabs} selectedIndex={activeTab}>
            <TabList>
              <Tab>{HomePageTabsE.YOUR_FEEDS}</Tab>
              <Tab>{HomePageTabsE.GLOBAL_FEEDS}</Tab>
              {Boolean(selectedTag?.length) && <Tab>#{selectedTag}</Tab>}
            </TabList>

            {[...Array(tabsCount)].map((_, index) => (
              <TabPanel key={index}>
                <Posts isLoading={isLoading} posts={articles} />
              </TabPanel>
            ))}
          </Tabs>
          <Pagination
            itemsCount={paginationItemsCount}
            onChange={onChangePage}
          />
        </ContentWrapStyled>
        <SidebarStyled>
          <Tags onClick={onClickTag} />
        </SidebarStyled>
      </ContainerWrapStyled>
    </>
  );
};

export default Home;
