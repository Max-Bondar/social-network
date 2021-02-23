import styled from 'styled-components';

export type InputWrapPropsT = {
  hasStatusIcon?: boolean;
  isSuccess?: boolean;
  isFocused?: boolean;
  isError?: boolean;
};

export const InputLabelStyled = styled.span`
  display: block;

  ${({ theme }) => `
    margin-bottom: 2px;
    font-size: ${theme.fontSizes.xSmall};
  `}
`;

export const InputWithLabelWrapStyled = styled.div`
  position: relative;
`;

export const InputStyled = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 10px;

  line-height: normal;

  ${({ theme }) => `
    border: 1px solid ${theme.color.textLight};
    border-radius: ${theme.other.borderRadius};


    font-size: ${theme.fontSizes.small};

    &::placeholder {
      color: ${theme.color.textLight};
      opacity: 1;
    }

    &:focus {
      border-color:  ${theme.color.primaryMain};
    }

    &:disabled {
      border-color:  ${theme.color.textLight};
      color: ${theme.color.textLight};
      cursor: not-allowed;
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px ${theme.color.other0} inset !important;
      background-clip: content-box !important;
    }
  `}
`;

export const InputWrapStyled = styled.div<InputWrapPropsT>`
  position: relative;
  z-index: 1;

  ${InputStyled}:enabled {
    ${({ isSuccess, theme }) =>
      isSuccess
        ? `
      background: ${theme.color.successLight};
      border-color: ${theme.color.successMain};

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active  {
        box-shadow: 0 0 0 30px ${theme.color.successLight} inset !important;
      }

      
  `
        : ''};

    ${({ isError, theme }) =>
      isError
        ? `
      border-color: ${theme.color.importantMain};

      color: ${theme.color.importantMain};

      &::placeholder {
        color: ${theme.color.importantMain};
      }
    `
        : ''}

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
