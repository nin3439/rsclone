import { TimeFormats } from '../App.types';

export const calendarFormats = {
  MONTH: 'month' as TimeFormats,
  WEEK: 'week' as TimeFormats,
  DAY: 'day' as TimeFormats,
  AGENDA: 'agenda' as TimeFormats,
};

export const dateFormats = {
  MONTH: 'MMMM YYYY',
  WEEK: 'MMM D',
  DAY: 'dddd MMM D',
  AGENDA: 'MMMM YYYY',
  TODAY: 'dddd, Do MMMM',
};
