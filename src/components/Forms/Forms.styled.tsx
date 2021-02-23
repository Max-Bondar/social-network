import styled from 'styled-components';
import { Paper, FormRowStyled } from 'shared-components';

export const FormWrapStyled = styled(Paper)`
  max-width: 600px;
  margin: 50px auto;
`;

export const FormLabelStyled = styled.h3`
  margin-bottom: 30px;

  ${({ theme }) => `
      font-size: ${theme.fontSizes.xxLarge};  
    `}
`;

export const FormBottomStyled = styled.p`
  margin-top: 40px;
  text-align: center;

  a {
    ${({ theme }) => `
      color: ${theme.color.primaryMain};

      &:hover {
        text-decoration: underline;
      }
    `}
  }
`;

export const ButtonWrapStyled = styled(FormRowStyled)`
  height: 45px;
  margin-top: 25px !important;
`;
