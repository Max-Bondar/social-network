import styled from 'styled-components';
import { LogoStyled, FlexBoxStyled } from 'shared-components';
import { Container } from 'components';

export const FooterStyled = styled.footer`
  padding: 10px 0;

  ${({ theme }) => `
      background: ${theme.color.layoutFooter};  
      border-top: 1px solid${theme.color.textLight};
  `}
`;

export const LogoIconStyled = styled(LogoStyled)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const InnerWrapStyled = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => `
    ${theme.devices.mobile} {
      flex-direction: column;
      
      ${FlexBoxStyled} {
        margin-bottom: 5px;
      }
    }
  `}
`;
