import React from 'react';
import get from 'lodash/get';
import {
  Field,
  FieldProps,
  FieldConfig,
  FormikSharedConfig,
  FormikHandlers,
} from 'formik';

type FieldPropsT = {
  children?: React.ReactElement;
  name: string;
  clickHandler?: string;
  onChangeCallback?: (
    data: any,
    setFieldValue: (key: string, value: any) => void
  ) => void;
  onChange?: FormikHandlers['handleChange'];
  onBlur?: FormikHandlers['handleBlur'];
  id?: string;
  render?: ({ field, form }: FieldProps) => React.ReactElement;
  validate?: (value: any) => Promise<void> | undefined;
};

type ChildFieldPropsT = { children: React.ReactElement } & Omit<
  FieldPropsT,
  'children'
> &
  FieldProps &
  FieldConfig;

type FieldParentPropsT = FieldPropsT &
  Omit<FieldConfig, 'validate'> &
  FormikSharedConfig;

function ChildField({ children, form, ...rest }: ChildFieldPropsT) {
  const {
    field,
    clickHandler = 'onChange',
    onChangeCallback = () => null,
  } = rest;
  const error = get(form.errors, field.name);

  const el = React.cloneElement(children, {
    form,
    ...field,
    [clickHandler]: (data: any) => {
      field.onChange(field.name)(data);
      onChangeCallback(data, form.setFieldValue);
    },
    ...(error ? { error } : null),
    id: field.name,
    ...rest,
  });

  return el;
}

export const FieldParent: React.FC<FieldParentPropsT> = ({
  children,
  ...props
}) =>
  typeof props.render === 'function' ? (
    <Field {...props} />
  ) : (
    <Field {...props} component={ChildField}>
      {children}
    </Field>
  );

export default FieldParent;
