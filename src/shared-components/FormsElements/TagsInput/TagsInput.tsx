import React, { useState } from 'react';
import { WithContext as ReactTags, Tag } from 'react-tag-input';
import { InputLabelStyled } from '../Input/Input.styled';
import { ReactTagsWrapStyled } from './TagsInput.styled';

type TagsInputPropsT = {
  suggestions?: Tag[];
  tags?: Tag[];
  placeholder?: string;
  label?: string;
  onTagsUpdate: (tags: Tag[]) => void;
};

const TagsInput: React.FC<TagsInputPropsT> = ({
  placeholder = 'Enter tags',
  label = 'Tags',
  tags = [],
  suggestions = [],
  onTagsUpdate,
}) => {
  const [getTags, setTags] = useState(tags);

  const handleAddition = (tag: Tag) => {
    setTags([...getTags, tag]);
    onTagsUpdate([...getTags, tag]);
  };

  const handleDeleteTag = (i: number) => {
    const filteredTags = getTags.filter((_, index) => index !== i);
    setTags(filteredTags);

    onTagsUpdate(filteredTags);
  };

  return (
    <ReactTagsWrapStyled>
      <InputLabelStyled>{label}</InputLabelStyled>
      <ReactTags
        allowDragDrop={false}
        placeholder={placeholder}
        suggestions={suggestions}
        tags={getTags}
        handleDelete={handleDeleteTag}
        handleAddition={handleAddition}
      />
    </ReactTagsWrapStyled>
  );
};

export default TagsInput;
