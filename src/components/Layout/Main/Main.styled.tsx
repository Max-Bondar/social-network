import styled from 'styled-components';

export const MainStyled = styled.main`
  flex: 1;

  ${({ theme }) => `
    background: ${theme.color.layoutMain};
  `}
`;
