import React, { useState } from 'react';
import {
  Input,
  InputPropsT,
  EyeOpenIcon,
  EyeCloseIcon,
} from 'shared-components';
import { usePasswordSecurity } from './hooks/usePasswordSecurity';
import {
  PasswordInputWrapStyled,
  ToggleButtonStyled,
  EyeIconStyled,
  PasswordSecurityLevelStyled,
} from './PasswordInput.styled';

export type PasswordSecurityLevelT = {
  isSecurityLevelHidden?: boolean;
};

type PasswordInputPropsT = PasswordSecurityLevelT & InputPropsT;

const PasswordInput: React.FC<PasswordInputPropsT> = ({
  label,
  value,
  isSecurityLevelHidden,
  ...props
}) => {
  const { passwordSecurityLevel } = usePasswordSecurity(value || '');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onToggleVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const renderLabelWithSecurityLevel = () => {
    if (!value) {
      return label;
    }

    return (
      <>
        {label}
        <PasswordSecurityLevelStyled modifier={passwordSecurityLevel}>
          {passwordSecurityLevel}
        </PasswordSecurityLevelStyled>
      </>
    );
  };

  return (
    <PasswordInputWrapStyled>
      <Input
        {...props}
        value={value}
        label={isSecurityLevelHidden ? label : renderLabelWithSecurityLevel()}
        type={isPasswordVisible ? 'text' : 'password'}
      />
      <ToggleButtonStyled type="button" onClick={onToggleVisibility}>
        <EyeIconStyled isEyeOpened={isPasswordVisible}>
          {isPasswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
        </EyeIconStyled>
      </ToggleButtonStyled>
    </PasswordInputWrapStyled>
  );
};

export default PasswordInput;
