import React, { useEffect } from 'react';
import classes from './styles/MyCalendars.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateHolidaysBelarus } from '../../../../API';
import { updateSelectedHoliday } from '../../../../redux/updateState';

export const MyCalendars: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHolidaysBelarus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isHolidaysSelected = useSelector(
    (state: any) => state.stateControl.isHolidaysSelected
  );
  const toggleHolidays = () => {
    dispatch(updateSelectedHoliday());
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
