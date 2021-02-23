import React from 'react';
import { Button, LikeIcon } from 'shared-components';
import { ArticleI } from 'libs/declarations-ts';
import { useFavorite, useGoToRoute } from 'hooks';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import {
  PostWrapStyled,
  ContentWrapStyled,
  TitleStyled,
  DescriptionStyled,
  LikeButtonStyled,
  TagListStyled,
} from './Post.styled';

type PostPropsT = {
  article: ArticleI;
};

const Post: React.FC<PostPropsT> = ({ article }) => {
  const { onClickLike, isLoading, article: favoriteArticle } = useFavorite(
    article.slug
  );
  const { goToArticle } = useGoToRoute();

  const {
    slug,
    createdAt,
    title,
    description,
    favorited,
    favoritesCount,
    tagList,
    author: { username, image },
  } = { ...article, ...favoriteArticle };

  return (
    <PostWrapStyled>
      <ProfileHeader username={username} image={image} createdAt={createdAt}>
        <LikeButtonStyled
          modifier="outlined"
          isLoading={isLoading}
          isFavorite={favorited}
          onClick={onClickLike}
        >
          <LikeIcon />
          {favoritesCount}
        </LikeButtonStyled>
      </ProfileHeader>
      <ContentWrapStyled>
        <TitleStyled>{title}</TitleStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
      </ContentWrapStyled>
      <TagListStyled>
        {tagList.map((tag, index, arr) => {
          return (
            <li key={index}>
              #{tag}
              {arr.length - 1 !== index && ', '}&nbsp;
            </li>
          );
        })}
      </TagListStyled>
      <Button modifier="inline" onClick={() => goToArticle(slug)}>
        Read more...
      </Button>
    </PostWrapStyled>
  );
};

export default Post;
