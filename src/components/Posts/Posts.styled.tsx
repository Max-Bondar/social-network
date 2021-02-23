import styled from 'styled-components';

export const MessageWrapStyled = styled.p`
  margin-top: 30px;
  text-align: center;

  ${({ theme }) => `
    font-size: ${theme.fontSizes.xLarge};
  `}
`;
