import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateActiveModal,
  updateDate,
} from '../../redux/actions/StateContolAction';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons/';
import classes from './styles/Widgets.module.scss';
import { useStyles } from './styles/materialUIStyles';

export const Widgets: React.FC = () => {
  const classesMaterial = useStyles();
  const dispatch = useDispatch();
  const { date } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    dispatch(updateDate(dateValue));
  };
  const { t } = useTranslation();
  const changeModalActive = () => {
    dispatch(updateActiveModal());
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.widgets}>
        <Button
          onClick={changeModalActive}
          className={classesMaterial.root}
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<Add />}
        >
          {t('create')}
        </Button>
        <Calendar date={date} changeDate={changeDate} />
        <MyCalendars />
      </div>
      <Footer />
    </div>
  );
};
