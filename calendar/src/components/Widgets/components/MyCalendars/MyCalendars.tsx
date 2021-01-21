import React, { useEffect } from 'react';
import classes from './styles/MyCalendars.module.scss';
import { MyCalendarsProps } from './MyCalendars.types';

export const MyCalendars: React.FC<MyCalendarsProps> = ({
  setHolidays,
  isHolidaysSelected,
  setIsHolidaysSelected,
  holidays,
}) => {
  useEffect(() => {
    const url =
      'https://holidayapi.com/v1/holidays?pretty&key=79470c0f-95f1-4988-9261-54417f3e6da3&country=BY&year=2020';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.holidays.map((holiday: any) => {
          return setHolidays([
            ...holidays,
            {
              start: holiday.date,
              end: holiday.observed,
              title: holiday.name,
            },
          ]);
        });
      })
      .catch(Error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleHolidays = () => {
    setIsHolidaysSelected(!isHolidaysSelected);
  };
  return (
    <div className={classes['mycalendars-wrapper']}>
      <p className={classes.paragraph}>My Calendars</p>
      <label>
        <input
          type="checkbox"
          onChange={toggleHolidays}
          checked={isHolidaysSelected}
        />
        Belarus's Holidays
      </label>
      <label>
        <input type="checkbox" />
        Birthdays
      </label>
      <label>
        <input type="checkbox" />
        Tasks
      </label>
      <label>
        <input type="checkbox" />
        Reminders
      </label>
    </div>
  );
};
