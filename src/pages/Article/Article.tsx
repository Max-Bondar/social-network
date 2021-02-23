import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ProfileHeader, ArticleSkeleton, ArticleForm } from 'components';
import { Button, DeleteIcon, LikeIcon, Popup } from 'shared-components';
import { LikeButtonStyled } from 'components/Post/Post.styled';
import { useFavorite } from 'hooks';
import { ArticleFormValueT } from 'components/Forms/ArticleForm/ArticleForm';
import Comments from './components/Comments/Comments';
import { useArticle } from './hooks/useArticle';
import {
  ControlsWrapStyled,
  TitleStyled,
  ArticleBodyStyled,
  ArticleWrapStyled,
  ArticlePageWrapStyled,
  TagListStyled,
} from './Article.styled';

const Article: React.FC = () => {
  const {
    article,
    isLoadingArticle,
    isLoggedUserArticle,
    isLoggedIn,
    comments,
    isPostCommentLoading,
    loggedUserName,
    isDeletingArticle,
    createComment,
    deleteComment,
    deleteArticle,
    updateArticle,
  } = useArticle();
  const {
    onClickLike,
    isLoading: isLoadingFollowing,
    article: articleFavorite,
  } = useFavorite(article.slug);
  const [isEditFormVisible, setEditFormVisibility] = useState(false);

  const {
    author: { username, image },
    createdAt,
    body,
    favorited,
    favoritesCount,
    title,
    description,
    tagList,
  } = { ...article, ...articleFavorite };

  const initialEditFormValues = {
    body,
    title,
    description,
    tagList,
  };

  const handleEditFormSubmit = (article: ArticleFormValueT) => {
    updateArticle({ article });
    setEditFormVisibility(false);
  };

  return (
    <>
      <ArticlePageWrapStyled>
        {isLoadingArticle ? (
          <ArticleWrapStyled>
            <ArticleSkeleton />
          </ArticleWrapStyled>
        ) : (
          <>
            <ArticleWrapStyled>
              <ProfileHeader
                username={username}
                image={image}
                createdAt={createdAt}
              >
                {isLoggedUserArticle ? (
                  isLoggedIn && (
                    <ControlsWrapStyled>
                      <Button
                        modifier="outlined"
                        disabled={isDeletingArticle}
                        onClick={() => setEditFormVisibility(true)}
                      >
                        Edit Article
                      </Button>
                      <Button
                        modifier="secondary"
                        icon={<DeleteIcon height="11px" />}
                        isLoading={isDeletingArticle}
                        onClick={deleteArticle}
                      >
                        Delete
                      </Button>
                    </ControlsWrapStyled>
                  )
                ) : (
                  <LikeButtonStyled
                    modifier="outlined"
                    isLoading={isLoadingFollowing}
                    isFavorite={favorited}
                    onClick={onClickLike}
                  >
                    <LikeIcon />
                    {favoritesCount}
                  </LikeButtonStyled>
                )}
              </ProfileHeader>
              <TitleStyled>{title}</TitleStyled>
              <ArticleBodyStyled>
                <ReactMarkdown children={body} />
              </ArticleBodyStyled>

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
            </ArticleWrapStyled>

            <Comments
              isLoggedIn={isLoggedIn}
              isPostCommentLoading={isPostCommentLoading}
              loggedUserName={loggedUserName}
              username={username}
              image={image}
              comments={comments}
              onPostComment={comment => createComment(comment)}
              onDeleteComment={id => deleteComment(id)}
            />
          </>
        )}
      </ArticlePageWrapStyled>

      <Popup
        isOpen={isEditFormVisible}
        onClose={() => setEditFormVisibility(false)}
      >
        <ArticleForm
          mode="edit"
          initialValues={initialEditFormValues}
          onSubmit={handleEditFormSubmit}
        />
      </Popup>
    </>
  );
};

export default Article;
