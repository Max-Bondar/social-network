import styled from 'styled-components';
import { Container } from 'components';
import { PaginationWrapStyled } from 'shared-components/Pagination/Pagination.styled';

export const ContainerWrapStyled = styled(Container)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      flex-direction: column;  
    }
  `}
`;

export const ContentWrapStyled = styled.div`
  flex: 1;
  margin-right: 20px;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      order: 1;  
      margin: 15px 0 0;
    }
  `}

  ${PaginationWrapStyled} {
    margin-top: 30px;
  }
`;
