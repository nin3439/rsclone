import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import { FormElement } from '../../../Form/Forms';
import { Calendar } from './components/Calendar/Calendar';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18ns';
import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.sass';

export const Sidebar = ({ date, changeDate }: SidebarProps) => {
  const { t, i18n } = useTranslation();
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
        {t('create')}
      </Button>
      <Calendar  date={date} changeDate={changeDate} />
      {activeModal && <FormElement changeModalActive={changeModalActive} />}
    </div>
  );
};
