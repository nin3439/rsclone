import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CalendarProps } from './Calendar.types';
import MomentUtils from '@date-io/moment';

export const Calendar = ({ date, changeDate }: CalendarProps) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
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
