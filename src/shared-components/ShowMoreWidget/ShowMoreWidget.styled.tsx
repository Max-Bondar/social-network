import styled from 'styled-components';
import { ButtonStyled } from 'shared-components';

export const ShowMoreWidgetWrapStyled = styled.div`
  margin: -10px -5px 0;
`;

export const OptionsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 10px 5px 0;
  }

  ${ButtonStyled} {
    min-height: auto;
    padding: 5px;
  }
`;

export const ButtonsWrapStyled = styled.li`
  display: inline-flex;

  ${({ theme }) => `
    font-size: ${theme.fontSizes.xxSmall};      
  `}

  ${ButtonStyled} {
    padding: 0;
  }
`;
