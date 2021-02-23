import { useState } from 'react';
import { useApi, useNotifDataFetch } from 'hooks';
import { ProfileI } from 'libs/declarations-ts';

type useFollowT = {
  isLoading: boolean;
  followProfile: ProfileI;
  onClickFollow: () => void;
};

const defaultProfile = {} as ProfileI;
const notifErrorMessage = 'Authentication required. Please Login';

export const useFollow = (username: string): useFollowT => {
  const { followProfileApi, unfollowProfileApi } = useApi();
  const [isFollowed, setIsFollowing] = useState(false);
  const [profile, setFollowProfile] = useState<ProfileI>(defaultProfile);

  const [followRes, followProfile] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await followProfileApi(username);
      setIsFollowing(true);
      setFollowProfile(res.data.profile);
      return res;
    },
    notifErrorMessage,
    isLazy: true,
  });

  const [unfollowRes, unfollowProfile] = useNotifDataFetch({
    fetchHandler: async () => {
      const res = await unfollowProfileApi(username);
      setIsFollowing(false);
      setFollowProfile(res.data.profile);
      return res;
    },
    notifErrorMessage,
    isLazy: true,
  });

  const onClickFollow = () => {
    if (isFollowed) {
      return unfollowProfile();
    }

    followProfile();
  };

  return {
    isLoading: followRes.isLoading || unfollowRes.isLoading,
    followProfile: profile,
    onClickFollow,
  };
};
