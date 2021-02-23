import React from 'react';
import noop from 'lodash/noop';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import { Form, withFormik, FormikProps } from 'formik';
import {
  Input,
  FieldParent,
  PasswordInput,
  Button,
  FormRowStyled,
  ErrorMessage,
} from 'shared-components';
import { RegistrationFormSchema } from 'validationSchemas';
import { BaseEntityCustomerT } from 'api/auth/auth.d';
import useRegistrationForm from './hooks/useRegistrationForm';
import {
  FormWrapStyled,
  FormLabelStyled,
  FormBottomStyled,
  ButtonWrapStyled,
} from '../Forms.styled';

type RegistrationFormValuesT = BaseEntityCustomerT;

type RegistrationFormPropsT = {};

type LoginFormFormikPropsT = RegistrationFormPropsT &
  FormikProps<RegistrationFormValuesT>;

const RegistrationForm: React.FC<LoginFormFormikPropsT> = ({
  values,
  initialValues,
  errors,
}) => {
  const { createUser, isLoading } = useRegistrationForm();

  const isSubmitButtonDisabled =
    isEqual(values, initialValues) || !!Object.keys(errors).length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createUser({ user: values });
  };

  return (
    <FormWrapStyled>
      <FormLabelStyled>Sign up</FormLabelStyled>
      <Form onSubmit={handleSubmit}>
        <FormRowStyled>
          <FieldParent name="username">
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
            />
          </FieldParent>
          <ErrorMessage name="username" />
        </FormRowStyled>
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
            <PasswordInput label="Password" placeholder="Enter your password" />
          </FieldParent>
          <ErrorMessage name="password" />
        </FormRowStyled>
        <ButtonWrapStyled>
          <Button
            type="submit"
            modifier="primary"
            isFullWidth
            isFullHeight
            disabled={isSubmitButtonDisabled}
            isLoading={isLoading}
          >
            Sign up
          </Button>
        </ButtonWrapStyled>
      </Form>
      <FormBottomStyled>
        Already a member? <Link to="/login">Log in</Link>
      </FormBottomStyled>
    </FormWrapStyled>
  );
};

export default withFormik<RegistrationFormPropsT, RegistrationFormValuesT>({
  validationSchema: RegistrationFormSchema,
  mapPropsToValues: () => {
    return {
      email: '',
      password: '',
      username: '',
    };
  },
  handleSubmit: noop,
})(RegistrationForm);
