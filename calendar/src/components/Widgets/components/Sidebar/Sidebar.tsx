import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import { FormElement } from '../../../Form/Forms';
import { Calendar } from './components/Calendar/Calendar';
import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.sass';

export const Sidebar = ({ date, changeDate }: SidebarProps) => {
  const [active, setValue] = useState({ modalActive: false });
  return (
    <div className={styles.sidebar}>
      <Button
        onClick={() => {
          setValue({ modalActive: true });
        }}
        className={styles.button}
        variant="contained"
        color="primary"
      >
        Create
      </Button>
      <Calendar date={date} changeDate={changeDate} />
      <FormElement active={active.modalActive} setValue={setValue} />
    </div>
  );
};
