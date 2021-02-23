import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { lightTheme } from 'libs/styled';
import {
  ProfileContainerStyled,
  AvatarWrapStyled,
} from 'pages/Profile/Profile.styled';
import {
  HeaderWrapStyled,
  UserWrapStyled,
} from 'components/ProfileHeader/ProfileHeader.styled';
import {
  SkeletonWrapStyled,
  TagsSkeletonWrapStyled,
  AvatarSkeletonWrapStyled,
  OverrideSkeletonWrapStyled,
  ProfileNameSkeletonWrapStyled,
  ProfileContentSkeletonWrapStyled,
  ArticleUserNameStyled,
} from './Skeleton.styled';

export const PostsSkeleton: React.FC = () => {
  return (
    <SkeletonWrapStyled>
      <Skeleton count={5} height={203} />
    </SkeletonWrapStyled>
  );
};

export const TagsSkeleton: React.FC = () => {
  return (
    <TagsSkeletonWrapStyled>
      <Skeleton count={3} width={70} height={26} />
    </TagsSkeletonWrapStyled>
  );
};

export const ProfileSkeleton: React.FC = () => {
  return (
    <ProfileContainerStyled>
      <AvatarWrapStyled>
        <Skeleton
          width={120}
          height={120}
          circle
          wrapper={AvatarSkeletonWrapStyled}
        />
        <Skeleton height={26} wrapper={OverrideSkeletonWrapStyled} />
      </AvatarWrapStyled>
      <ProfileContentSkeletonWrapStyled>
        <Skeleton
          height={33}
          width={150}
          wrapper={ProfileNameSkeletonWrapStyled}
        />
        <Skeleton height={50} wrapper={OverrideSkeletonWrapStyled} />
      </ProfileContentSkeletonWrapStyled>
    </ProfileContainerStyled>
  );
};

export const ArticleSkeleton: React.FC = () => {
  return (
    <>
      <HeaderWrapStyled>
        <UserWrapStyled>
          <AvatarWrapStyled>
            <Skeleton
              width={40}
              height={40}
              circle
              wrapper={OverrideSkeletonWrapStyled}
            />
          </AvatarWrapStyled>

          <div>
            <Skeleton height={19} width={100} wrapper={ArticleUserNameStyled} />
            <Skeleton
              height={16}
              width={150}
              wrapper={OverrideSkeletonWrapStyled}
            />
          </div>
        </UserWrapStyled>
      </HeaderWrapStyled>
      <Skeleton height={19} width={100} wrapper={ArticleUserNameStyled} />
      <Skeleton height={19} wrapper={ArticleUserNameStyled} />
      <Skeleton height={19} wrapper={ArticleUserNameStyled} />
    </>
  );
};
