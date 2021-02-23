import styled from 'styled-components';

export const PaginationWrapStyled = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;

    ${({ theme }) => `
      li {
        border-radius: ${theme.other.borderRadius};
        border: 1px solid ${theme.color.textMain};
        cursor: pointer;

        & + li {
          margin-left: 5px;  
        }

        &.disabled {
          border-color: ${theme.color.textLight};
          color: ${theme.color.textLight}; 
          cursor: not-allowed; 
        }

        &.selected {
          border-color: ${theme.color.textLight};
          color: ${theme.color.other0}; 
          background: ${theme.color.primaryMain};
          font-weight: ${theme.fontWeights.semibold};
        }

        &:hover:not(.selected, .disabled) {
          border-color: ${theme.color.primaryMain};
          color: ${theme.color.primaryMain};  
          font-weight: ${theme.fontWeights.semibold};
        }

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          height: 30px;

          outline: none;
        }
      }

      ${theme.devices.mobile} {
        padding: 0 15px;
        justify-content: center;
      }
    `}
  }
`;
