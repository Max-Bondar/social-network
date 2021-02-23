import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Posts, Container, EditProfileForm, ProfileSkeleton } from 'components';
import { EditProfileFormValuesT } from 'components/Forms/EditProfileForm/EditProfileForm';
import { ProfilePageTabsE } from 'libs/declarations-ts';
import { Pagination, ShowMoreWidget, Button, Popup } from 'shared-components';
import { useFollow } from 'hooks';
import { useProfile } from './hooks/useProfile';
import {
  ContainerWrapStyled,
  AvatarStyled,
  NameStyled,
  ProfileContainerStyled,
  AvatarWrapStyled,
} from './Profile.styled';

const Profile: React.FC = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const {
    loggedUserProfile,
    isUserProfile,
    isLoadingArticles,
    isLoadingProfile,
    profile,
    articles,
    activeTab,
    paginationItemsCount,
    onChangeTabs,
    onChangePage,
    updateUserProfile,
  } = useProfile();

  const {
    onClickFollow,
    isLoading: isLoadingFollowing,
    followProfile,
  } = useFollow(profile.username);

  const { username, bio, image, following } = { ...profile, ...followProfile };
  const textBio = bio ? bio : 'No biography is here yet...';

  const handleUpdateProfileFormSubmit = (
    updatedUserProfile: EditProfileFormValuesT
  ) => {
    setPopupVisibility(false);
    updateUserProfile(updatedUserProfile);
  };

  return (
    <>
      <Container hasSidePaddingMobile>
        {isLoadingProfile ? (
          <ProfileSkeleton />
        ) : (
          <ProfileContainerStyled>
            <AvatarWrapStyled>
              <AvatarStyled src={image} as="div" />
              {isUserProfile ? (
                <Button
                  modifier="outlined"
                  isFullWidth
                  onClick={() => setPopupVisibility(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  modifier="outlined"
                  isFullWidth
                  isLoading={isLoadingFollowing}
                  onClick={onClickFollow}
                >
                  {following ? 'Unfollow' : 'Follow'}
                </Button>
              )}
            </AvatarWrapStyled>

            <div>
              <NameStyled>{username}</NameStyled>
              <ShowMoreWidget text={textBio} maxCharacters={300} />
            </div>
          </ProfileContainerStyled>
        )}
      </Container>

      <ContainerWrapStyled>
        <Tabs onSelect={onChangeTabs} selectedIndex={activeTab}>
          <TabList>
            <Tab>{ProfilePageTabsE.MY_POSTS}</Tab>
            <Tab>{ProfilePageTabsE.FAVORITED_POSTS}</Tab>
          </TabList>

          {[...Array(2)].map((_, index) => (
            <TabPanel key={index}>
              <Posts isLoading={isLoadingArticles} posts={articles} />
            </TabPanel>
          ))}
        </Tabs>
        <Pagination itemsCount={paginationItemsCount} onChange={onChangePage} />
      </ContainerWrapStyled>

      <Popup isOpen={isPopupVisible} onClose={() => setPopupVisibility(false)}>
        <EditProfileForm
          initialValues={loggedUserProfile}
          onSubmit={handleUpdateProfileFormSubmit}
        />
      </Popup>
    </>
  );
};

export default Profile;
