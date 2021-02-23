import styled from 'styled-components';

export const ErrorMessageStyled = styled.span`
  ${({ theme }) => `
      color: ${theme.color.importantMain};
      font-size: ${theme.fontSizes.xxSmall};
    `}
`;
