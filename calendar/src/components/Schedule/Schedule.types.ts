import { Moment } from 'moment';

export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type EventsScheduleProps = {
  date: Moment | null;
  changeDate: (date: Moment | null) => void;
  holidays: Events[];
  events: any[];
  setEvents: (events: any[]) => void;
  isHolidaysSelected: boolean;
  t: any;
};

export type updateDateFormProps = {
  typeEvents: string;
  title: string;
  listGuest: string;
  location: string;
  description: string;
  dateTimeStart: string;
  dateTimeEnd: string;
};
