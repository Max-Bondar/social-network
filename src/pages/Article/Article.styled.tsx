import styled from 'styled-components';
import { ButtonStyled, Paper } from 'shared-components';
import { Container } from 'components';
import { HeaderWrapStyled } from 'components/ProfileHeader/ProfileHeader.styled';

export const ControlsWrapStyled = styled.div`
  display: flex;

  ${ButtonStyled} {
    min-width: 75px;

    & + ${ButtonStyled} {
      margin-left: 15px;
    }
  }
`;

export const TitleStyled = styled.h3``;

export const ArticleBodyStyled = styled.div`
  p + p {
    margin-top: 10px;
  }
`;

export const ArticlePageWrapStyled = styled(Container)`
  margin: 20px auto;
`;

export const ArticleWrapStyled = styled(Paper)`
  ${({ theme }) => `
     ${theme.devices.mobile} {
        ${HeaderWrapStyled}{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;  
        } 
     }      
  `}
`;

export const TagListStyled = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
