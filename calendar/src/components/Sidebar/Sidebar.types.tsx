import { Moment } from 'moment';
export type SidebarProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
};
