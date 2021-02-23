import styled from 'styled-components';
import { ButtonStyled } from 'shared-components';
import { InputWithLabelWrapStyled } from 'shared-components/FormsElements/Input/Input.styled';

type CommentsPropsT = {
  hasLeftIndent: boolean;
};

export const CommentButtonWrapStyled = styled.div`
  margin: 20px 0;
  text-align: end;

  ${ButtonStyled} {
    min-width: 105px;
  }
`;

export const CommentInputWrapStyled = styled.div`
  display: flex;

  ${InputWithLabelWrapStyled} {
    flex: 1;
  }
`;

export const CommentWrapStyled = styled.div`
  ${({ theme }) => `
    & + & {
      padding-top: 20px;
      margin-top: 20px;  
      border-top: 1px solid ${theme.color.textLight};
    } 
  `}
`;

export const CommentsWrapStyled = styled.div<CommentsPropsT>`
  ${({ hasLeftIndent, theme }) => `
    ${
      hasLeftIndent
        ? `
        margin-left: 60px;
    `
        : ''
    } 
    
    ${theme.devices.mobile}{
       margin-left: 0; 
    }
  `}
`;

export const MessageWrapStyled = styled.p`
  margin-bottom: 15px;
  text-align: center;
`;

export const InnerCommentWrapStyled = styled.div`
  ${({ theme }) => `
    border: 1px solid ${theme.color.textLight};
    border-radius: ${theme.other.borderRadius};
    padding: 10px;
  `}
`;

export const CommentStyled = styled.div`
  margin-top: 15px;
`;
