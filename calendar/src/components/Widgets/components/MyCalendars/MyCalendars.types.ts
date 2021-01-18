export type Events = {
  start: object | string;
  end: object | string;
  title: string;
};

export type MyCalendarsProps = {
  holidays: Events[];
  setHolidays: (holidays: Events[]) => void;
  isHolidaysSelected: boolean;
  setIsHolidaysSelected: (isHolidaysSelected: boolean) => void;
};
