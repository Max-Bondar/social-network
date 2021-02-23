import omitBy from 'lodash/omitBy';
import { ObjectT } from './query';

export const excludeEmptyFields = <D extends ObjectT>(data: D): Partial<D> =>
  omitBy(data, value => {
    // Omit empty arrays
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    // Omit empty string and `undefined`
    if (typeof value === 'string' || value === undefined || value === null) {
      return !value;
    }

    // Keep any number
    return false;
  }) as Partial<D>;
