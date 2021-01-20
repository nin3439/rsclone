import { Moment } from 'moment';

export type HeaderProps = {
  showBlock: boolean;
  setShowBlock: any;
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
};
