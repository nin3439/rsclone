import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHolidaysBelarus } from '../../../../redux/actions/contentAction';
import { updateSelectedHoliday } from '../../../../redux/actions/StateContolAction';
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@material-ui/core/';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles/materialUIStyles';

export const MyCalendars: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
    dispatch(updateSelectedHoliday());
  };
  return (
    <div className={classesMaterial.root}>
      <Typography
        className={classesMaterial.title}
        color="textSecondary"
        gutterBottom
      >
        {t('My_Calendars')}
      </Typography>
      <FormGroup>
        <FormControlLabel
          className={classesMaterial.pos}
          control={
            <Checkbox
              style={{
                color: '#f50057',
              }}
            />
          }
          label={t('Tasks')}
        />
        <FormControlLabel
          className={classesMaterial.pos}
          control={
            <Checkbox
              style={{
                color: '#ff9800',
              }}
            />
          }
          label={t('Reminders')}
        />
        <FormControlLabel
          className={classesMaterial.pos}
          control={
            <Checkbox
              checked={isHolidaysSelected}
              onChange={toggleHolidays}
              style={{
                color: '#00bcd4',
              }}
            />
          }
          label={t("Belarus's_holidays")}
        />
      </FormGroup>
    </div>
  );
};
