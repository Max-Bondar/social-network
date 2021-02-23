import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useGoToRoute } from 'hooks';
import { CommentI } from 'libs/declarations-ts';
import {
  Button,
  DeleteIcon,
  Paper,
  AvatarStyled,
  Textarea,
} from 'shared-components';
import { ProfileHeader } from 'components';
import { CommentDTO } from 'api/comments/comments';
import {
  CommentButtonWrapStyled,
  CommentInputWrapStyled,
  CommentWrapStyled,
  CommentsWrapStyled,
  MessageWrapStyled,
  InnerCommentWrapStyled,
  CommentStyled,
} from './Comments.styled';

type CommentsPropsT = {
  isLoggedIn: boolean;
  loggedUserName: string;
  comments: CommentI[];
  image: string;
  username: string;
  isPostCommentLoading: boolean;
  onPostComment: (comment: CommentDTO) => void;
  onDeleteComment: (id: number) => void;
};

const Comments: React.FC<CommentsPropsT> = ({
  isLoggedIn,
  loggedUserName,
  comments,
  image,
  username,
  isPostCommentLoading,
  onPostComment,
  onDeleteComment,
}) => {
  const { goToLogin, goToRegistration, goToProfile } = useGoToRoute();
  const [commentInputValue, setCommentInputValue] = useState('');

  const onChangeCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInputValue(e.target.value);
  };

  const handleCreateComment = () => {
    onPostComment({
      body: commentInputValue,
    });

    setCommentInputValue('');
  };

  return (
    <Paper>
      {isLoggedIn ? (
        <>
          <CommentInputWrapStyled>
            <AvatarStyled src={image} onClick={() => goToProfile(username)} />

            <Textarea
              name="comment"
              onChange={onChangeCommentInput}
              placeholder="Write your comment"
              value={commentInputValue}
            />
          </CommentInputWrapStyled>
          <CommentButtonWrapStyled>
            <Button
              isLoading={isPostCommentLoading}
              disabled={!commentInputValue}
              onClick={handleCreateComment}
            >
              Post Comment
            </Button>
          </CommentButtonWrapStyled>
        </>
      ) : (
        <MessageWrapStyled>
          <Button modifier="link" onClick={() => goToLogin()}>
            Sign in
          </Button>{' '}
          or{' '}
          <Button modifier="link" onClick={() => goToRegistration()}>
            Sign up
          </Button>{' '}
          to add comments on this article.
        </MessageWrapStyled>
      )}

      <CommentsWrapStyled hasLeftIndent={isLoggedIn}>
        {comments.map((comment, index) => {
          const {
            createdAt,
            body,
            id,
            author: { username, image },
          } = comment;

          const isCommentedByLoggedUser = !Boolean(
            loggedUserName.localeCompare(username)
          );

          return (
            <CommentWrapStyled key={index}>
              <InnerCommentWrapStyled>
                <ProfileHeader
                  username={username}
                  image={image}
                  createdAt={createdAt}
                >
                  {isCommentedByLoggedUser && isLoggedIn && (
                    <Button
                      modifier="secondary"
                      icon={<DeleteIcon height="11px" />}
                      onClick={() => onDeleteComment(id)}
                    >
                      Delete
                    </Button>
                  )}
                </ProfileHeader>
                <CommentStyled>
                  <ReactMarkdown children={body} />
                </CommentStyled>
              </InnerCommentWrapStyled>
            </CommentWrapStyled>
          );
        })}
      </CommentsWrapStyled>
    </Paper>
  );
};

export default Comments;
