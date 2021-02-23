export const DATE_MASK = 'MMMM d, y HH:mm';

function getDateObj(value?: string | number | Date): Date {
  if (typeof value === 'undefined' || value === '') {
    return new Date();
  }

  return value instanceof Date ? value : new Date(value);
}

export const getUTCDate = (dateParam: string | Date) => {
  const date = getDateObj(dateParam);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};
