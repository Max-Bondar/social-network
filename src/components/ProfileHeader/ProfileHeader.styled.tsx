import styled from 'styled-components';

export const UserWrapStyled = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const NameStyled = styled.button`
  ${({ theme }) => `
    font-weight: ${theme.fontWeights.semibold}; 
    color: ${theme.color.primaryMain};

    &:hover {
      color: ${theme.color.primaryDark};
    }
  `}
`;

export const DateStyled = styled.div`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.xxSmall};
    color: ${theme.color.textLight};      
  `}
`;

export const HeaderWrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
