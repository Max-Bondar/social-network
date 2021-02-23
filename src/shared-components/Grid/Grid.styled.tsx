import styled from 'styled-components';

type FlexBoxPropsT = {
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'initial'
    | 'inherit';
  direction?:
    | 'row'
    | 'row-reverse '
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit';
};

type FlexColPropsT = {
  flex?: number | string;
};

export const FlexBoxStyled = styled.div<FlexBoxPropsT>`
  display: flex;

  ${({ alignItems, justifyContent, direction }) => `
    ${
      alignItems &&
      `
        align-items: ${alignItems};
    `
    }

    ${
      justifyContent &&
      `
      justify-content: ${justifyContent};
    `
    }

    ${
      direction &&
      `
      flex-direction: ${direction};
    `
    }
  `}
`;

export const FlexColStyled = styled.div<FlexColPropsT>`
  flex: ${({ flex }) => flex || 1};
`;
