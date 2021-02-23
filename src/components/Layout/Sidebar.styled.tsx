import styled from 'styled-components';

export const SidebarStyled = styled.aside`
  max-width: 250px;
  width: 100%;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      max-width: 100%; 
    }
  `}
`;
