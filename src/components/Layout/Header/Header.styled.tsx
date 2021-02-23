import styled from 'styled-components';
import { Container } from 'components';
import { LogoStyled } from 'shared-components';

export const HeaderStyled = styled.header`
  padding: 10px 0;

  ${({ theme }) => `
    background: ${theme.color.layoutHeader};
    box-shadow: ${theme.color.shadowPaper};
  `}
`;

export const NavListStyled = styled.ul``;

export const MenuStyled = styled.nav`
  ${NavListStyled} {
    display: flex;

    & > li {
      align-self: center;

      a {
        display: inline-block;
        padding: 10px;

        ${({ theme }) => `
          color: ${theme.color.textLight};
          font-weight: ${theme.fontWeights.semibold};

          &:hover {
            color: ${theme.color.textMain}; 
          }

          &.active {
            color: ${theme.color.textDark};
          }
        `}
      }

      & + li {
        margin-left: 10px;
      }
    }
  }
`;

export const LogoIconStyled = styled(LogoStyled)`
  width: 65px;
  height: 50px;
`;

export const InnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownListStyled = styled.ul`
  li + li {
    margin-top: 15px;
  }
`;
