import styled, { css } from 'styled-components';
import { BaseButtonPropsT } from './Button';

type DefaultButtonPropsT = {
  hasIcon?: boolean;
} & BaseButtonPropsT;

const defaultButton = styled.button<DefaultButtonPropsT>`
  position: relative;
  line-height: 1;
  padding: 5px;

  ${props => `
    ${props.isFullWidth ? `width: 100%` : ''};
    ${props.isFullHeight ? `height: 100%` : ''};
    ${
      props.hasIcon
        ? `
            display: flex;
            align-items: center;
            `
        : ``
    }
  `};

  ${({ theme, isLoading }) => `
    min-height: 26px;
    border-radius: ${theme.other.borderRadius};
    color: ${isLoading ? 'transparent' : theme.color.other0};
    font-weight: ${theme.fontWeights.semibold};

    &[disabled] {
      background: ${theme.color.textLight};
      color: ${isLoading ? 'transparent' : theme.color.other0};
      cursor: not-allowed;
      border: none;

      &:hover {
        background: ${theme.color.textLight};
      }
    }
  `}
  ${props =>
    props.isRounded
      ? `
    // SUPPORT FF, CHROME AND OLD BROWSERS
    // https://stackoverflow.com/questions/18794947/capsule-shape-using-border-radius-without-a-set-width-or-height/18795153#18795153
    min-height: 40px;
    border-radius: 40px;
  `
      : ''};
`;

const primary = css`
  ${({ theme }) => `
    background: ${theme.color.primaryMain};

    &:hover {
      filter: brightness(95%);
    }

    &:active {
      background: ${theme.color.primaryDark};
    }
  `}
`;

export const secondary = css`
  ${({ theme }) => `
    background: ${theme.color.secondaryMain};

    &:hover {
      background: ${theme.color.secondaryLight};
    }

    &:active {
      background: ${theme.color.secondaryDark};
    }
  `}
`;

export const outlined = css`
  ${({ theme }) => `
    border: 1px solid ${theme.color.primaryMain};

    color: ${theme.color.primaryMain};

    &:hover {
      color: ${theme.color.other0};
      background:  ${theme.color.primaryMain};
    }

    &:active {
      border-color: ${theme.color.primaryDark};
      color: ${theme.color.other0};
      background:  ${theme.color.primaryDark};
    }
  `}
`;

export const link = css`
  ${({ theme }) => `
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.color.primaryMain};

    &:focus,
    &:hover {
      color: ${theme.color.primaryDark};
    }
  `};
`;

export const inline = css`
  ${({ theme }) => `
        min-height: auto;
        padding: 0;
        font-weight: ${theme.fontWeights.semibold};
        color: ${theme.color.other2};

        &:not([disabled]) {
          &:hover {
            filter: brightness(85%);
          }

          &:active {
            color: ${theme.color.other2};
          }
        }
    `};
`;

export const IconWrapStyled = styled.span`
  display: block;
  width: 11px;
  height: 11px;
  margin-right: 9px;
`;

export const ButtonStyled = styled(defaultButton)<BaseButtonPropsT>`
  ${props => {
    switch (props.modifier) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      case 'outlined':
        return outlined;
      case 'link':
        return link;
      case 'inline':
        return inline;
      default:
        return null;
    }
  }};
`;

export const IconStatusWrapStyled = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    svg {
      color: ${theme.color.textDark};
    }
  `}
`;
