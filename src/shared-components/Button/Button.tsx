import React from 'react';
import { SpinnerIcon } from 'shared-components';
import {
  IconWrapStyled,
  ButtonStyled,
  IconStatusWrapStyled,
} from './Button.styled';

export type BaseButtonPropsT = {
  modifier?: string | React.ReactNode;
  isRounded?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
};

export type ButtonPropsT = {
  icon?: string | React.ReactNode;
} & BaseButtonPropsT;

export const Button: React.FC<ButtonPropsT> = ({
  icon,
  modifier = 'primary',
  isRounded,
  isFullWidth,
  isFullHeight,
  children,
  isLoading,
  disabled,
  ...props
}) => {
  const hasIcon = Boolean(icon);

  return (
    <ButtonStyled
      modifier={modifier}
      isRounded={isRounded}
      isFullWidth={isFullWidth}
      isFullHeight={isFullHeight}
      hasIcon={hasIcon}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <IconStatusWrapStyled>
          <SpinnerIcon />
        </IconStatusWrapStyled>
      ) : (
        <>
          {hasIcon && <IconWrapStyled>{icon}</IconWrapStyled>}
          {children}
        </>
      )}
    </ButtonStyled>
  );
};

export default Button;
