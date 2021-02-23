import { useApi, useDataFetch } from 'hooks';
import { TagsI } from 'libs/declarations-ts';
import { NON_PRINTABLE_CHARS_REGEX } from 'libs/helpers';

type UseTagsT = {
  isLoading: boolean;
} & TagsI;

export const useTags = (): UseTagsT => {
  const { getTagsApi } = useApi();

  const [tagsRes] = useDataFetch({
    fetchHandler: getTagsApi,
    initialData: [],
  });

  const tags = tagsRes.data.tags?.filter((tag: string) => {
    return tag.replace(NON_PRINTABLE_CHARS_REGEX, '').length;
  });

  return {
    tags: tags,
    isLoading: tagsRes.isLoading,
  };
};
