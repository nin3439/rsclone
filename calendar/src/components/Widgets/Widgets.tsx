import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { MyCalendars } from './components/MyCalendars/MyCalendars';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeActiveModal,
  changeDateCalendar,
} from '../../redux/actions/StateContolAction';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons/';
import { playSound } from '../../utils/playSound';
import { useHotkeys } from 'react-hotkeys-hook';
import classes from './styles/Widgets.module.scss';
import { useStyles } from './styles/materialUIStyles';

export const Widgets: React.FC = () => {
  const classesMaterial = useStyles();
  const dispatch = useDispatch();
  const { date, isSoundOn } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    debugger;
    dispatch(changeDateCalendar(dateValue));
  };
  const { t } = useTranslation();
  const changeModalWindow = () => {
    dispatch(changeActiveModal());
  };
  useHotkeys('ctrl+c', () => changeModalWindow());
  return (
    <div className={classes.wrapper}>
      <div className={classes.widgets}>
        <Button
          onClick={() => {
            changeModalWindow();
            playSound(isSoundOn);
          }}
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
