import * as qs from 'qs';

export type ObjectT = {
  [key in string]?: string | string[] | number | number[] | undefined | boolean;
};

export const stringifyToQueryString = (queryParams: object) => {
  return qs.stringify(queryParams, { encode: true });
};

export function parseQueryString<T extends ObjectT>(search: string) {
  const parsedQueryString = qs.parse(search.replace(/^\?/, ''));

  return Object.keys(parsedQueryString).reduce((params, key: string) => {
    // normalize boolean values
    if (
      parsedQueryString[key] === 'true' ||
      parsedQueryString[key] === 'false'
    ) {
      return { ...params, [key]: parsedQueryString[key] === 'true' };
    }

    return {
      ...params,
      [key]: parsedQueryString[key],
    };
  }, {} as T);
}
