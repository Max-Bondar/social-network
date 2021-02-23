import styled from 'styled-components';
import { Container } from 'components';

export const HeroStyled = styled.section`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    height: 250px;
    background: url(${require(theme.isDarkMode
      ? '../../../static/images/hero-dark-mode.jpg'
      : '../../../static/images/hero.jpg')})
    no-repeat center;
    background-size: cover;
  `}
`;

export const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => `
    max-width: 400px;
    font-size: ${theme.fontSizes.xxxLarge};
    text-shadow: 1px 1px ${theme.color.textLight};

    ${theme.devices.mobile} {
       max-width: 225px;     

       font-size: ${theme.fontSizes.xxLarge}; 
    }
  `}
`;

export const IconStyled = styled.span`
  display: inline-block;
  width: 80px;
  height: 80px;
  flex: none;
  margin-top: 15px;

  background: url(${require('../../../static/images/hero-icon.png')}) no-repeat
    center;
  background-size: contain;
`;
