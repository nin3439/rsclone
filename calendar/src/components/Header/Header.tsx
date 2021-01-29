import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Formats } from '../../constants/formats';
import { Languages } from '../../constants/constants';
import i18n from '../../i18ns';
import {
  updateDate,
  updateShowBlock,
  updateViewFormat,
  updateLanguage,
} from '../../redux/actions/StateContolAction';
import {
  Menu,
  ArrowBackIos,
  Today,
  ArrowForwardIos,
  Search,
} from '@material-ui/icons';
import {
  IconButton,
  Button,
  Tooltip,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core/';
import classes from './styles/Header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const setViewFormat = (view: string) => {
    dispatch(updateViewFormat(view));
  };
  const setShowBLock = () => {
    dispatch(updateShowBlock());
  };
  const { date, language, viewFormat } = useSelector(
    (state: any) => state.stateControl
  );
  const changeDate = (dateValue: any) => {
    dispatch(updateDate(dateValue));
  };
  const calendarTodayDate = 'dddd, Do MMMM';
  const calendarMouthYear = 'MMMM YYYY';

  const handleChangeView = (event: any) => {
    setViewFormat(event.target.value);
  };
  const changeLanguage = (ln: string) => {
    dispatch(updateLanguage(ln));
    i18n.changeLanguage(ln);
  };
  return (
    <div className={classes.header}>
      <Tooltip title="Menu">
        <IconButton>
          <Menu onClick={setShowBLock} />
        </IconButton>
      </Tooltip>

      <Today />
      <span className={classes.calendarName}>Calendar</span>

      <Tooltip title={moment().format(calendarTodayDate)}>
        <Button
          variant="outlined"
          onClick={() => {
            changeDate(moment());
          }}
        >
          Today
        </Button>
      </Tooltip>

      <Tooltip title="Previous Month">
        <Button
          onClick={() => {
            changeDate(moment(date).subtract(1, 'months'));
          }}
        >
          <ArrowBackIos />
        </Button>
      </Tooltip>

      <Tooltip title="Next Month">
        <Button
          onClick={() => {
            changeDate(moment(date).add(1, 'months'));
          }}
        >
          <ArrowForwardIos />
        </Button>
      </Tooltip>

      <span className={classes.calendarDate}>
        {date!.locale(language).format(calendarMouthYear)}
      </span>

      <Tooltip title="Search">
        <Button>
          <Search />
        </Button>
      </Tooltip>

      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={viewFormat}
          onChange={handleChangeView}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem
            value={Formats.MONTH}
            onClick={() => setViewFormat(Formats.MONTH)}
          >
            Month
          </MenuItem>
          <MenuItem
            value={Formats.WEEK}
            onClick={() => setViewFormat(Formats.WEEK)}
          >
            Week
          </MenuItem>
          <MenuItem
            value={Formats.DAY}
            onClick={() => setViewFormat(Formats.DAY)}
          >
            Day
          </MenuItem>
          <MenuItem
            value={Formats.AGENDA}
            onClick={() => setViewFormat(Formats.AGENDA)}
          >
            Agenda
          </MenuItem>
        </Select>
      </FormControl>

      <button
        onClick={(e) => {
          e.stopPropagation();
          changeLanguage(Languages.EN);
        }}
      >
        {Languages.EN}
      </button>
      <button
        onClick={() => {
          changeLanguage(Languages.RU);
        }}
      >
        {Languages.RU}
      </button>
      <button
        onClick={() => {
          changeLanguage(Languages.PT);
        }}
      >
        {Languages.PT}
      </button>
      <button
        onClick={() => {
          changeLanguage(Languages.DE);
        }}
      >
        {Languages.DE}
      </button>
    </div>
  );
};
