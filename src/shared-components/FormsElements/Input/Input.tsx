import React from 'react';
import { FormikProps } from 'formik';
import get from 'lodash/get';
import {
  InputWithLabelWrapStyled,
  InputLabelStyled,
  InputWrapStyled,
  InputStyled,
} from './Input.styled';

type InputT = {
  name?: string;
  label?: string | React.ReactNode;
  value?: string;
  type?: string;
  isError?: boolean;
  isSuccess?: boolean;
  isFocused?: boolean;
  disabled?: boolean;
  error?: string;
  form?: FormikProps<{}>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode | null;
};

export type InputPropsT = InputT & React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputPropsT> = ({
  name = '',
  placeholder = '',
  isError,
  isSuccess,
  label,
  value,
  error,
  isFocused,
  children,
  disabled,
  form,
  type = 'text',
  ...props
}) => {
  let isTouched = false;

  if (form) {
    isTouched = get(form.touched, name);
  }

  const isInvalid =
    isError !== undefined ? isError : isTouched && Boolean(error);
  const isValid =
    isSuccess !== undefined ? isSuccess : isTouched && !error && Boolean(value);

  const inputValue = value === undefined || value === null ? '' : value;

  return (
    <InputWithLabelWrapStyled>
      {label && <InputLabelStyled>{label}</InputLabelStyled>}
      <InputWrapStyled
        isSuccess={isValid}
        isFocused={isFocused}
        isError={isInvalid}
      >
        <InputStyled
          disabled={disabled}
          {...props}
          type={type}
          placeholder={placeholder}
          value={inputValue}
        />
        {children}
      </InputWrapStyled>
    </InputWithLabelWrapStyled>
  );
};
