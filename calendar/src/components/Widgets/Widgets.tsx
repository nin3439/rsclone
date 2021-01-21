import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { FormElement } from '../Form/Forms';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import { WidgetsProps } from './Widgets.types';
import styles from './styles/Widgets.module.scss';
import { useTranslation } from 'react-i18next';

export const Widgets: React.FC<WidgetsProps> = ({
  date,
  changeDate,
  holidays,
  setHolidays,
  isHolidaysSelected,
  setIsHolidaysSelected,
}) => {
  const { t } = useTranslation();
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
      <Calendar date={date} changeDate={changeDate} />
      {activeModal && <FormElement changeModalActive={changeModalActive} />}
      <MyCalendars
        holidays={holidays}
        setHolidays={setHolidays}
        isHolidaysSelected={isHolidaysSelected}
        setIsHolidaysSelected={setIsHolidaysSelected}
      />
    </div>
  );
};
