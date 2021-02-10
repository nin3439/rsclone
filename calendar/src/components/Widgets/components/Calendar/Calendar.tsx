import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useSelector } from 'react-redux';
import { CalendarProps } from './Calendar.types';
import { useStyles } from './styles/materialUIStyles';
import './styles/Calendar.scss';
import moment from 'moment';
export const Calendar = ({ date, changeDate }: CalendarProps) => {
  const { language } = useSelector((state: any) => state.stateControl);
  const classMaterial = useStyles();
  moment.locale(language);
  return (
    <MuiPickersUtilsProvider locale={language} utils={MomentUtils}>
      <DatePicker
        variant="static"
        value={date}
        onChange={changeDate}
        disableToolbar={true}
        allowKeyboardControl={true}
        animateYearScrolling={true}
        className={classMaterial.root}
      />
    </MuiPickersUtilsProvider>
  );
};
