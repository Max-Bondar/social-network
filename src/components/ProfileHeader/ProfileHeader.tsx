import React from 'react';
import { format } from 'date-fns';
import { DATE_MASK, getUTCDate } from 'libs/helpers';
import { AvatarStyled } from 'shared-components';
import { useGoToRoute } from 'hooks';
import {
  UserWrapStyled,
  NameStyled,
  DateStyled,
  HeaderWrapStyled,
} from './ProfileHeader.styled';

type ProfileHeaderPropsT = {
  image: string;
  username: string;
  createdAt: string;
};

const ProfileHeader: React.FC<ProfileHeaderPropsT> = ({
  image,
  username,
  createdAt,
  children,
}) => {
  const { goToProfile } = useGoToRoute();

  return (
    <HeaderWrapStyled>
      <UserWrapStyled>
        <AvatarStyled
          type="button"
          src={image}
          onClick={() => goToProfile(username)}
        />
        <div>
          <NameStyled type="button" onClick={() => goToProfile(username)}>
            {username}
          </NameStyled>
          <DateStyled>{format(getUTCDate(createdAt), DATE_MASK)}</DateStyled>
        </div>
      </UserWrapStyled>
      {children}
    </HeaderWrapStyled>
  );
};

export default ProfileHeader;
