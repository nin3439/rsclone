import Button from '@material-ui/core/Button';
import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.scss';

export const Sidebar: React.FC<SidebarProps> = ({ date, changeDate }) => {
  return (
    <div className={styles.sidebar}>
      <Button className={styles.button} variant="contained" color="primary">
        Create
      </Button>
      <Calendar date={date} changeDate={changeDate} />
      <MyCalendars />
    </div>
  );
};
