import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export const Calendar = ({ date, changeDate } : {date: any, changeDate: any}) => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker variant="static" value={date} onChange={changeDate} disableToolbar={true} animateYearScrolling={true}/>
        </MuiPickersUtilsProvider>
    )
}
