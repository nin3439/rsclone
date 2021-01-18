import Button from '@material-ui/core/Button';
import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import { WidgetsProps } from './Widgets.types';
import styles from './styles/Sidebar.module.scss';

export const Widgets: React.FC<WidgetsProps> = ({
  date,
  changeDate,
  holidays,
  setHolidays,
  isHolidaysSelected,
  setIsHolidaysSelected,
}) => {
  return (
    <div className={styles.sidebar}>
      <Button className={styles.button} variant="contained" color="primary">
        Create
      </Button>
      <Calendar date={date} changeDate={changeDate} />
      <MyCalendars
        holidays={holidays}
        setHolidays={setHolidays}
        isHolidaysSelected={isHolidaysSelected}
        setIsHolidaysSelected={setIsHolidaysSelected}
      />
    </div>
  );
};
