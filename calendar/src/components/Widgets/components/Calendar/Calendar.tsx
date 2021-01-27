import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { CalendarProps } from './Calendar.types';
export const Calendar = ({ date, changeDate }: CalendarProps) => {
  const { language } = useSelector((state: any) => state.stateControl);
  moment.locale(language);
  return (
    <MuiPickersUtilsProvider locale={language} utils={MomentUtils}>
      <DatePicker
        variant="static"
        value={date}
        onChange={changeDate}
        disableToolbar={true}
        animateYearScrolling={true}
      />
    </MuiPickersUtilsProvider>
  );
};
