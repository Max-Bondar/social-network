import React from 'react';
import noop from 'lodash/noop';
import isEqual from 'lodash/isEqual';
import { withFormik, FormikProps } from 'formik';
import { Tag } from 'react-tag-input';
import {
  FieldParent,
  Input,
  FormRowStyled,
  Textarea,
  TagsInput,
  Button,
} from 'shared-components';
import { FormLabelStyled, ButtonWrapStyled } from '../Forms.styled';

export type ArticleFormValueT = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

type ArticleFormPropsT = {
  mode?: 'create' | 'edit';
  initialValues?: ArticleFormValueT;
  isLoading?: boolean;
  onSubmit: (values: ArticleFormValueT) => void;
};

type ArticleFormFormikPropsT = ArticleFormPropsT &
  FormikProps<ArticleFormValueT>;

const DEFAULT_ARTICLE = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

const FormLabels = {
  create: 'New Article',
  edit: 'Edit Article',
};

const SubmitButtonLabels = {
  create: 'Publish Article',
  edit: 'Update Article',
};

const NewArticleForm: React.FC<ArticleFormFormikPropsT> = ({
  setFieldValue,
  initialValues,
  values,
  errors,
  isLoading,
  onSubmit,
  mode = 'create',
}) => {
  const isSubmitButtonDisabled =
    isEqual(values, initialValues) || !!Object.keys(errors).length;

  const handleTagsUpdate = (tags: Tag[]) => {
    const cleanTags = tags.map(tag => tag.text);

    setFieldValue('tagList', cleanTags);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabelStyled>{FormLabels[mode]}</FormLabelStyled>
      <FormRowStyled>
        <FieldParent name="title">
          <Input
            type="text"
            label="Article title"
            placeholder="Article title"
          />
        </FieldParent>
      </FormRowStyled>
      <FormRowStyled>
        <FieldParent name="description">
          <Input
            type="text"
            label="Description"
            placeholder="What's your article about?"
          />
        </FieldParent>
      </FormRowStyled>
      <FormRowStyled>
        <FieldParent name="body">
          <Textarea label="Write your article" placeholder="Article" />
        </FieldParent>
      </FormRowStyled>
      <FormRowStyled>
        <FieldParent name="body">
          <TagsInput onTagsUpdate={handleTagsUpdate} />
        </FieldParent>
      </FormRowStyled>

      <ButtonWrapStyled>
        <Button
          modifier="primary"
          isFullHeight
          isFullWidth
          isLoading={isLoading}
          disabled={isSubmitButtonDisabled}
        >
          {SubmitButtonLabels[mode]}
        </Button>
      </ButtonWrapStyled>
    </form>
  );
};

export default withFormik<ArticleFormPropsT, ArticleFormValueT>({
  mapPropsToValues: ({ initialValues }) =>
    initialValues ? initialValues : DEFAULT_ARTICLE,
  handleSubmit: noop,
})(NewArticleForm);
