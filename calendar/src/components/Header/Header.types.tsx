import { Moment } from 'moment';

export type TimeFormats = 'month' | 'week' | 'work_week' | 'day' | 'agenda';

export type HeaderProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  setViewFormat: (viewFormat: TimeFormats) => void;
};
