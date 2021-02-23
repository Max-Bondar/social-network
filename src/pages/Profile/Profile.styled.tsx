import styled from 'styled-components';
import { AvatarStyled as Avatar, Paper } from 'shared-components';
import { PaginationWrapStyled } from 'shared-components/Pagination/Pagination.styled';
import { Container } from 'components';

export const ContainerWrapStyled = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;

  ${PaginationWrapStyled} {
    margin-top: 30px;
  }
`;

export const ProfileContainerStyled = styled(Paper)`
  display: flex;
  margin-top: 25px;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      flex-direction: column; 
      align-items: center; 
      text-align: center;
    }
  `}
`;

export const AvatarWrapStyled = styled.div`
  margin-right: 20px;
  flex: none;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      margin-right: 0;
      margin-bottom: 15px;
    }
  `}
`;

export const AvatarStyled = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin-right: 0;
  margin-bottom: 15px;
`;

export const NameStyled = styled.p`
  margin-bottom: 15px;

  ${({ theme }) => `
    font-size: ${theme.fontSizes.xxLarge};
    font-weight: ${theme.fontWeights.semibold};
  `}
`;
