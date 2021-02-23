import styled from 'styled-components';

export const LogoStyled = styled.span`
  ${({ theme }) => `
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${require(theme.isDarkMode
      ? '../../static/images/logo-dark-mode.png'
      : '../../static/images/logo.png')})
    no-repeat center;
    background-size: contain;
  `}
`;
