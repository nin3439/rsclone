import moment from 'moment';
export const momentUpdate = (date: Date | string): string =>
  moment(date).format('YYYY-MM-DDTHH:mm');
