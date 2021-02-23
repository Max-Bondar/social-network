import React from 'react';
import { ErrorMessage as Message } from 'formik';
import { ErrorMessageStyled } from './ErrorMessage.styled';

type ErrorMessagePropsT = {
  name: string;
};

const ErrorMessage: React.FC<ErrorMessagePropsT> = ({ name }) => {
  return (
    <Message name={name}>
      {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
    </Message>
  );
};

export default ErrorMessage;
