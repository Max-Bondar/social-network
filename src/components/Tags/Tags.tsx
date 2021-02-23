import React from 'react';
import { TagsSkeleton } from 'components';
import { Button, ShowMoreWidget } from 'shared-components';
import { useTags } from './hooks/useTags';
import { TagsWrapStyled, SectionTitleStyled } from './Tags.styled';

type TagsPropsT = {
  onClick: (tag: string) => void;
};

const Tags: React.FC<TagsPropsT> = ({ onClick }) => {
  const { tags, isLoading } = useTags();

  const renderTags = () => {
    if (!tags?.length) {
      return <>No tags are here yet...</>;
    }

    return (
      <ShowMoreWidget
        options={tags}
        renderElement={<Button modifier="outlined" />}
        onClickElement={tag => onClick(tag)}
      />
    );
  };

  return (
    <TagsWrapStyled>
      <SectionTitleStyled>Popular Tags</SectionTitleStyled>

      {isLoading ? <TagsSkeleton /> : renderTags()}
    </TagsWrapStyled>
  );
};

export default Tags;
