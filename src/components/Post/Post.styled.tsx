import styled from 'styled-components';
import { Paper, Button } from 'shared-components';

type LikeButtonPropsT = {
  isFavorite: boolean;
};

export const PostWrapStyled = styled(Paper)``;

export const ContentWrapStyled = styled.section`
  margin-bottom: 15px;
  padding: 10px;

  ${({ theme }) => `
    border: 1px solid ${theme.color.textLight};
    border-radius: ${theme.other.borderRadius};
  `}
`;

export const TitleStyled = styled.h3`
  text-decoration: underline;
  margin-bottom: 10px;

  ${({ theme }) => `
    color: ${theme.color.textMain};
    font-weight: ${theme.fontWeights.medium};
  `}
`;

export const DescriptionStyled = styled.p``;

export const LikeButtonStyled = styled(Button)<LikeButtonPropsT>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  min-height: 26px;

  & > div {
    margin-right: 5px;
  }

  ${({ theme, isFavorite }) => `
    ${
      isFavorite
        ? `
      background: ${theme.color.primaryMain};
      color: ${theme.color.other0};
    `
        : ''
    }
  `}
`;

export const TagListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 50%;
  margin-left: auto;

  ${({ theme }) => `
    font-size: ${theme.fontSizes.xxSmall};
  `}
`;
