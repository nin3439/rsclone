import { Moment } from 'moment';

export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda';

export type HeaderProps = {
  showBlock: boolean;
  setShowBlock: any;
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  setViewFormat: (view: View) => void;
};
