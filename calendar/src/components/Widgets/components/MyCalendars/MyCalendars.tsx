import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHolidaysBelarus } from '../../../../redux/actions/contentAction';
import { changeSelectedHoliday } from '../../../../redux/actions/StateContolAction';
import { playSound } from '../../../../utils/playSound';
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
  const { isHolidaysSelected, date, isSoundOn } = useSelector(
    (state: any) => state.stateControl
  );
  const classMaterial = useStyles();

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
    <div className={classMaterial.root}>
      <Typography
        className={classMaterial.title}
        color="textSecondary"
        gutterBottom
      >
        {t('My_Calendars')}
      </Typography>
      <FormGroup>
        <FormControlLabel
          className={classMaterial.pos}
          control={
            <Checkbox
              onClick={() => playSound(isSoundOn)}
              style={{
                color: '#f50057',
              }}
            />
          }
          label={t('Tasks')}
        />
        <FormControlLabel
          className={classMaterial.pos}
          control={
            <Checkbox
              onClick={() => playSound(isSoundOn)}
              style={{
                color: '#ff9800',
              }}
            />
          }
          label={t('Reminders')}
        />
        <FormControlLabel
          className={classMaterial.pos}
          control={
            <Checkbox
              onClick={() => playSound(isSoundOn)}
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
