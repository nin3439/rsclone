import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import { FormElement } from '../../../Form/Forms';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars'
import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.sass';

export const Sidebar = ({ date, changeDate }: SidebarProps) => {
  const [activeModal, setActiveModal] = useState(false);
   const changeModalActive = (): void => {
      setActiveModal(false);
    };

  return (
    <div className={styles.sidebar}>
      <Button
        onClick={() => {
         setActiveModal(true);
        }}
        className={styles.button}
        variant="contained"
        color="primary"
      >
        Create
      </Button>
      <Calendar date={date} changeDate={changeDate} />
      {activeModal && <FormElement changeModalActive={changeModalActive}/>}
      <MyCalendars />
    </div>
  );
};
