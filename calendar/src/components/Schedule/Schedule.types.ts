import { Moment } from 'moment';

export type Events = {
  start: object | string;
  end: object | string;
  title: string;
};

export type EventsScheduleProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  holidays: Events[];
  events: any[];
  setEvents: (events: any[]) => void;
  isHolidaysSelected: boolean;
};
