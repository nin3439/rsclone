import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18ns';
import { FormElement } from '../Form/Forms';

import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';

import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.scss';

export const Sidebar: React.FC<SidebarProps> = ({ date, changeDate }) => {
  const [modalActive, changeModalActive] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.sidebar}>
      <Button
        onClick={() => {
          changeModalActive(true);
        }}
        className={styles.button}
        variant="contained"
        color="primary"
      >
        {t('create')}
      </Button>

      <Calendar date={date} changeDate={changeDate} />
      <MyCalendars />
      {modalActive && <FormElement changeModalActive={changeModalActive} />}
    </div>
  );
};
