import styled from 'styled-components';

type DropdownBodyPropsT = {
  bodyPosition: string;
};

export const DropdownWrapStyled = styled.div`
  position: relative;
`;

export const DropdownLabelStyled = styled.button`
  display: flex;
  align-items: center;

  ${({ theme }) => `
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.color.textDark};
  `}
`;

export const DropdownBodyStyled = styled.div<DropdownBodyPropsT>`
  position: absolute;
  z-index: 100;
  top: calc(100% + 5px);
  min-width: 200px;
  padding: 10px;

  ${({ theme, bodyPosition }) => `
    ${bodyPosition ? `${bodyPosition}: 0;` : ''}
    border-radius: ${theme.other.borderRadius};
    background-color: ${theme.color.layoutPaper};
    box-shadow: ${theme.color.shadowPaper};
  `}
`;
