import React from 'react';
import classes from './styles/MyCalendars.module.scss';

export const MyCalendars: React.FC = () => {
  return (
    <div className={classes['mycalendars-wrapper']}>
      <p className={classes.paragraph}>My Calendars</p>
      <label>
        <input type="checkbox" />
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
