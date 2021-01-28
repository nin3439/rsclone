import React, { useEffect } from 'react';
import classes from './styles/MyCalendars.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateHolidaysBelarus } from '../../../../redux/actions/contentAction';
import { updateSelectedHoliday } from '../../../../redux/actions/StateContolAction';

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
  // export const MyCalendars: React.FC<MyCalendarsProps> = ({
  //   setHolidays,
  //   isHolidaysSelected,
  //   setIsHolidaysSelected,
  //   holidays,
  //   date,
  // }) => {
  //   const selectedYear = date?.format('YYYY');
  //   useEffect(() => {
  //     if (!holidays.length) {
  //       const url = `https://calendarific.com/api/v2/holidays?api_key=49b59051224e551a4d502bb47e736b778ff4fab9&country=BY&year=${selectedYear}`;
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           data.response.holidays.map((holiday: any) => {
  //             return setHolidays([
  //               ...holidays,
  //               {
  //                 start: holiday.date.iso,
  //                 end: holiday.date.iso,
  //                 title: holiday.name,
  //               },
  //             ]);
  //           });
  //         })
  //         .catch(Error);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [selectedYear]);

  // const toggleHolidays = () => {
  //   console.log(holidays);
  //   setIsHolidaysSelected(!isHolidaysSelected);
  // };
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
