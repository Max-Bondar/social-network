import React from 'react';
import noop from 'lodash/noop';
import { Link } from 'react-router-dom';
import { withFormik, FormikProps } from 'formik';
import { LoginFormSchema } from '../../../validationSchemas';
import {
  Input,
  FieldParent,
  PasswordInput,
  Button,
  FormRowStyled,
  ErrorMessage,
} from 'shared-components';
import {
  FormWrapStyled,
  FormLabelStyled,
  FormBottomStyled,
  ButtonWrapStyled,
} from '../Forms.styled';
import useLoginForm from './hooks/useLoginForm';

export type LoginFormValuesT = {
  email: string;
  password: string;
};

type LoginFormPropsT = {};

type LoginFormFormikPropsT = LoginFormPropsT & FormikProps<LoginFormValuesT>;

const LoginForm: React.FC<LoginFormFormikPropsT> = ({ values }) => {
  const { password, email } = values;
  const isLoginButtonDisabled = !email || !password;
  const { loginUser, isLoading } = useLoginForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginUser({ user: values });
  };

  return (
    <FormWrapStyled>
      <FormLabelStyled>Log in</FormLabelStyled>
      <form onSubmit={handleSubmit}>
        <FormRowStyled>
          <FieldParent name="email">
            <Input
              type="email"
              label="Email"
              placeholder="Enter email address"
            />
          </FieldParent>
          <ErrorMessage name="email" />
        </FormRowStyled>
        <FormRowStyled>
          <FieldParent name="password">
            <PasswordInput
              isSecurityLevelHidden
              label="Password"
              placeholder="Enter your password"
            />
          </FieldParent>
        </FormRowStyled>
        <ButtonWrapStyled>
          <Button
            modifier="primary"
            isFullWidth
            isFullHeight
            isLoading={isLoading}
            disabled={isLoginButtonDisabled}
          >
            Log in
          </Button>
        </ButtonWrapStyled>
      </form>
      <FormBottomStyled>
        Don’t have an account yet? <Link to="/register">Create an account</Link>
      </FormBottomStyled>
    </FormWrapStyled>
  );
};

export default withFormik<LoginFormPropsT, LoginFormValuesT>({
  validationSchema: LoginFormSchema,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: noop,
})(LoginForm);
