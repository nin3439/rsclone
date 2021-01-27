import { Moment } from 'moment';

export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type WidgetsProps = {
  // date: Moment | null;
  // changeDate: (date: Moment | null) => void;
  // holidays: Events[];
  // setHolidays: (holidays: Events[]) => void;
  isHolidaysSelected: boolean;
  setIsHolidaysSelected: (isHolidaysSelected: boolean) => void;
};
