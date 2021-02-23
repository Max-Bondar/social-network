import { createGlobalStyle } from 'styled-components';
import 'react-tabs/style/react-tabs.css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }  

  html {
    height: 100%;

    #root, .css-1zq1-SkeletonTheme, .css-w70tu1-SkeletonTheme {
      display: flex;
      flex-direction: column;
      height: inherit;
    }
  }

  body {
    height: inherit;
    margin: 0;
    padding: 0;

    ${({ theme }) => `
      font-family: ${theme.fontFamily.BalooDa2};
      font-size: ${theme.fontSizes.small};
      color: ${theme.color.textMain};

      .react-tabs__tab-list, .react-tabs__tab--selected {
        border-color: ${theme.color.primaryMain};
        background: ${theme.color.layoutMain};
        color: ${theme.color.textMain};
      }

      .react-tabs__tab--selected {
        font-weight: ${theme.fontWeights.semibold};
      }

      .react-tabs__tab:hover {
        font-weight: ${theme.fontWeights.semibold};
      }
    `}
  }

  button {
    padding: 0;
    border: none;

    font: inherit;

    color: inherit;
    background-color: transparent;

    cursor: pointer;
    outline: none;
  }

  p, h1, h2,
  h3, h4, h5,
  h6, button {
    margin: 0;
  }

  textarea {
    font-family: inherit;
    outline: none;
  }

  input {
    padding: 0;
    margin: 0; // safari has margins for inputs by defaults
    border: none;

    font: inherit;

    outline: none;

    &:disabled {
      background: transparent;
    }

    &::-ms-clear {
      display: none;
    }

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

`;

export default GlobalStyles;
