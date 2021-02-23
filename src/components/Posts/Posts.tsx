import React from 'react';
import { ArticleI } from 'libs/declarations-ts';
import { Post, PostsSkeleton } from 'components';
import { MessageWrapStyled } from './Posts.styled';

type PostsPropsT = {
  isLoading: boolean;
  posts: ArticleI[];
};

const Posts: React.FC<PostsPropsT> = ({ isLoading = false, posts = [] }) => {
  const renderPosts = () => {
    if (!posts.length) {
      return <MessageWrapStyled>No articles are here yet...</MessageWrapStyled>;
    }

    return posts.map((post, index) => <Post key={index} article={post} />);
  };

  return <>{isLoading ? <PostsSkeleton /> : renderPosts()}</>;
};

export default Posts;
