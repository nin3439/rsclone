export type Events = {
  start: Date | string;
  end: Date | string;
  title: string;
};

export type MyCalendarsProps = {
  // holidays: Events[];
  // setHolidays: (holidays: Events[]) => void;
  isHolidaysSelected: boolean;
  setIsHolidaysSelected: (isHolidaysSelected: boolean) => void;
};
