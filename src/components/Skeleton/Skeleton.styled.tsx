import styled from 'styled-components';

export const SkeletonWrapStyled = styled.div`
  .react-loading-skeleton + .react-loading-skeleton {
    margin-top: 15px;
  }
`;

export const TagsSkeletonWrapStyled = styled.div`
  .react-loading-skeleton {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const AvatarSkeletonWrapStyled = styled.div`
  margin-bottom: 15px;
  line-height: 1;
`;

export const OverrideSkeletonWrapStyled = styled.div`
  line-height: 1;
`;

export const ProfileNameSkeletonWrapStyled = styled(OverrideSkeletonWrapStyled)`
  margin-bottom: 15px;
  width: 150px;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      margin: 0 auto 15px;
    }
  `}
`;

export const ProfileContentSkeletonWrapStyled = styled.div`
  width: 100%;
`;

export const ArticleUserNameStyled = styled(OverrideSkeletonWrapStyled)`
  margin-bottom: 5px;
`;
