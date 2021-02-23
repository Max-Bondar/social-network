import style, { css } from 'styled-components';
import { InputStyled, InputLabelStyled } from 'shared-components';

type PasswordSecurityLevelPropsT = {
  modifier?: string;
};

type IconPropsT = {
  isEyeOpened: boolean;
};

export const PasswordInputWrapStyled = style.div`
  position: relative;

  ${InputStyled} {
    padding-right: 36px;
  }

  ${InputLabelStyled} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ToggleButtonStyled = style.button`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 0;
  z-index: 2;
  text-align: center;
  right: 0;
`;

export const EyeIconStyled = style.div<IconPropsT>`
  display: inline-block;
  vertical-align: middle;

  ${({ theme, isEyeOpened }) => `
    svg {
      color: ${theme.color.primaryMain};

      ${isEyeOpened ? `margin-top: -5px;` : ''}
    }
  `}
`;

const PasswordSecurityLevelBaseStyled = style.span`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.xxSmall};
    text-decoration: underline;
    text-decoration-style: dotted;
  `}
`;

const weakCSS = css`
  ${({ theme }) => `
    color: ${theme.color.secondaryMain};
  `}
`;

const mediumCSS = css`
  ${({ theme }) => `
    color: ${theme.color.other1};
  `}
`;

const strongCSS = css`
  ${({ theme }) => `
    color: ${theme.color.successDark};
  `}
`;

export const PasswordSecurityLevelStyled = style(
  PasswordSecurityLevelBaseStyled
)<PasswordSecurityLevelPropsT>`
${({ modifier }) => {
  switch (modifier) {
    case 'weak':
      return weakCSS;
    case 'medium':
      return mediumCSS;
    case 'strong':
      return strongCSS;
  }
}};
`;
