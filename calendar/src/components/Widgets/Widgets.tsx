import Button from '@material-ui/core/Button';
import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import styles from './styles/Widgets.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateActiveModal,
  updateDate,
} from '../../redux/reducers/UtilsReducers';

export const Widgets: React.FC = () => {
  const date = useSelector((state: any) => state.utils.date);
  const changeDate = (dateValue: any) => {
    dispatch(updateDate(dateValue));
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const changeModalActive = () => {
    dispatch(updateActiveModal());
  };
  return (
    <div className={styles.sidebar}>
      <Button
        onClick={changeModalActive}
        className={styles.button}
        variant="contained"
        color="primary"
      >
        {t('create')}
      </Button>
      <Calendar date={date} changeDate={changeDate} />
      <MyCalendars />
    </div>
  );
};
