import { Moment } from 'moment';

export type Events = {
  start: object | string;
  end: object | string;
  title: string;
};

export type WidgetsProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  holidays: Events[];
  setHolidays: (holidays: Events[]) => void;
  isHolidaysSelected: boolean;
  setIsHolidaysSelected: (isHolidaysSelected: boolean) => void;
};
