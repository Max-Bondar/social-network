import styled from 'styled-components';

export const ReactTagsWrapStyled = styled.div`
  .ReactTags__tags {
    min-height: 40px;
    padding: 10px;

    line-height: normal;

    ${({ theme }) => `
    border: 1px solid ${theme.color.textLight};
    border-radius: ${theme.other.borderRadius};
    background: ${theme.color.other0};

    font-size: ${theme.fontSizes.small};

    .ReactTags__selected {
      display: flex;
      flex-wrap: wrap;
      align-items: center;  
      gap: 5px;
    }

    .ReactTags__tag {
      background: ${theme.color.primaryMain};
      color: ${theme.color.other0};
      border-radius: ${theme.other.borderRadius};
      padding: 5px;

      &:hover {
        background: ${theme.color.primaryDark}; 
        cursor: pointer!important;
      }

      .ReactTags__remove {
        margin-left: 5px;  
      }
    }

    .ReactTags__tagInput{
       display: inline-block; 

       .ReactTags__tagInputField {
         &::placeholder {
           color: ${theme.color.textLight};
         }
       }
    }
  `}
  }
`;
