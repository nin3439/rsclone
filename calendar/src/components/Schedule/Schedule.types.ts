import { Moment } from 'moment';

export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type TimeFormats = 'month' | 'week' | 'work_week' | 'day' | 'agenda';

export type EventsScheduleProps = {
  // date: Moment | null;
  // changeDate: (date: Moment | null) => void;
  // holidays: Events[];
  isHolidaysSelected: boolean;
  t: any;
};

export type updateDateFormProps = {
  typeEvents?: string;
  title?: string;
  listGuest?: string;
  location?: string;
  description?: string;
  start?: string;
  end?: string;
};
