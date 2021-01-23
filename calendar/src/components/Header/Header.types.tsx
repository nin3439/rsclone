import { Moment } from 'moment';

export type TimeFormats = 'month' | 'week' | 'work_week' | 'day' | 'agenda';

export type HeaderProps = {
  showBlock: boolean;
  setShowBlock: (showBlock: boolean) => void;
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  setViewFormat: (view: TimeFormats) => void;
};
