import { Moment } from 'moment';
export type CalendarProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
};
