import { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  parseQueryString,
  stringifyToQueryString,
  ObjectT,
  excludeEmptyFields,
} from 'libs/helpers';

export default function useStateQueryString<StateT extends ObjectT>(
  defaultParams: Partial<StateT> = {}
) {
  const { push } = useHistory();
  const { pathname, search } = useLocation();

  const [queryParams, setQueryParams] = useState<StateT>({
    ...defaultParams,
    ...parseQueryString<StateT>(search),
  });
  const memoParseQueryString = useCallback(parseQueryString, [search]);

  const forceUpdate = useCallback(
    <Data extends ObjectT>(data: Data, shouldExcludeEmpty: boolean = true) => {
      const clearedData = shouldExcludeEmpty ? excludeEmptyFields(data) : data;
      const queryString = stringifyToQueryString(clearedData);

      push({
        pathname,
        search: queryString,
      });
    },
    [pathname, push]
  );

  const update = <Data extends ObjectT>(data: Data) => {
    const query = {
      ...queryParams,
      ...data,
    };

    push({ pathname, search: stringifyToQueryString(query) });
  };

  useEffect(() => {
    const parsedQuery = memoParseQueryString(search);

    setQueryParams({ ...defaultParams, ...parsedQuery } as StateT);
  }, [search, memoParseQueryString]);

  return {
    queryParams,
    update,
    forceUpdate,
  };
}
