import React, { FormEvent } from 'react';
import noop from 'lodash/noop';
import isEqual from 'lodash/isEqual';
import { withFormik, FormikProps } from 'formik';
import { UserI } from 'libs/declarations-ts';
import {
  Input,
  Textarea,
  FieldParent,
  PasswordInput,
  Button,
  FormRowStyled,
  ErrorMessage,
} from 'shared-components';
import { EditProfileFormSchema } from '../../../validationSchemas';
import { FormLabelStyled, ButtonWrapStyled } from '../Forms.styled';

type InitialFormValuesT = Pick<UserI, 'email' | 'bio' | 'image' | 'username'>;

export type EditProfileFormValuesT = {
  password: string;
} & InitialFormValuesT;

type EditProfileFormPropsT = {
  initialValues: InitialFormValuesT;
  isLoading?: boolean;
  onSubmit: (values: EditProfileFormValuesT) => void;
};

type EditProfileFormFormikPropsT = EditProfileFormPropsT &
  FormikProps<EditProfileFormValuesT>;

const DEFAULT_FORM_VALUES = {
  email: '',
  username: '',
  bio: '',
  image: '',
};

const EditProfileForm: React.FC<EditProfileFormFormikPropsT> = ({
  values,
  errors,
  initialValues,
  isLoading,
  onSubmit,
}) => {
  const isUpdateButtonDisabled =
    isEqual(values, initialValues) || !!Object.keys(errors).length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <>
      <FormLabelStyled>Profile info</FormLabelStyled>
      <form onSubmit={handleSubmit}>
        <FormRowStyled>
          <FieldParent name="image">
            <Input
              type="text"
              label="Picture"
              placeholder="Profile picture URL"
            />
          </FieldParent>
        </FormRowStyled>
        <FormRowStyled>
          <FieldParent name="username">
            <Input type="text" label="Username" placeholder="Username" />
          </FieldParent>
          <ErrorMessage name="username" />
        </FormRowStyled>
        <FormRowStyled>
          <FieldParent name="bio">
            <Textarea
              type="email"
              label="Biography"
              placeholder="Short biography"
            />
          </FieldParent>
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
            <PasswordInput
              isSecurityLevelHidden
              label="Confirm password or enter new"
              placeholder="Enter your password"
            />
          </FieldParent>
          <ErrorMessage name="password" />
        </FormRowStyled>
        <ButtonWrapStyled>
          <Button
            modifier="primary"
            isFullWidth
            isFullHeight
            isLoading={isLoading}
            disabled={isUpdateButtonDisabled}
          >
            Update Profile
          </Button>
        </ButtonWrapStyled>
      </form>
    </>
  );
};

export default withFormik<EditProfileFormPropsT, EditProfileFormValuesT>({
  validationSchema: EditProfileFormSchema,
  mapPropsToValues: ({ initialValues }) => {
    const values = initialValues ? initialValues : DEFAULT_FORM_VALUES;

    return {
      ...values,
      password: '',
    };
  },
  handleSubmit: noop,
})(EditProfileForm);
