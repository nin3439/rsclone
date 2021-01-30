import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHolidaysBelarus } from '../../../../redux/actions/contentAction';
import { changeSelectedHoliday } from '../../../../redux/actions/StateContolAction';
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@material-ui/core/';
import { useStyles } from './styles/materialUIStyles';

export const MyCalendars: React.FC = () => {
  const dispatch = useDispatch();
  const { isHolidaysSelected, date } = useSelector(
    (state: any) => state.stateControl
  );
  const classesMaterial = useStyles();

  useEffect(() => {
    if (isHolidaysSelected) {
      dispatch(updateHolidaysBelarus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.format('YYYY'), isHolidaysSelected]);

  const toggleHolidays = () => {
    dispatch(changeSelectedHoliday());
  };
  return (
    <div className={classesMaterial.root}>
      <Typography
        className={classesMaterial.title}
        color="textSecondary"
        gutterBottom
      >
        My Calendars
      </Typography>
      <FormGroup>
        <FormControlLabel
          className={classesMaterial.pos}
          control={
            <Checkbox
              checked={isHolidaysSelected}
              onChange={toggleHolidays}
              color="primary"
            />
          }
          label="Belarus's Holidays"
        />
        <FormControlLabel
          className={classesMaterial.pos}
          control={<Checkbox color="default" />}
          label="Birthdays"
        />
        <FormControlLabel
          className={classesMaterial.pos}
          control={<Checkbox color="secondary" />}
          label="Tasks"
        />
        <FormControlLabel
          className={classesMaterial.pos}
          control={<Checkbox color="default" />}
          label="Reminders"
        />
      </FormGroup>
    </div>
  );
};
