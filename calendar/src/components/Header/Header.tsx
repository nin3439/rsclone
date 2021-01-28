import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Formats } from '../../formats';
import { Languages } from '../../constants';
import i18n from '../../i18ns';
import {
  updateDate,
  updateShowBlock,
  updateViewFormat,
  updateLanguage,
} from '../../redux/actions/StateContolAction';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const setViewFormat = (view: string) => {
    dispatch(updateViewFormat(view));
  };
  const setShowBLock = () => {
    dispatch(updateShowBlock());
  };
  const { date, language } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    dispatch(updateDate(dateValue));
  };
  const calendarTodayDate = 'dddd, Do MMMM';
  const calendarMouthYear = 'MMMM YYYY';

  const handleChangeView = (event: any) => {
    setViewFormat(event.target.value);
    console.log(event);
  };
  const changeLanguage = (ln: string) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <div className={classes.header}>
      <div>
        <Tooltip title="Menu">
          <IconButton>
            <MenuIcon onClick={setShowBLock} />
          </IconButton>
        </Tooltip>

        <img
          className={classes.calendarImage}
          src="http://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_18_2x.png#"
          alt="Logo"
        />
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

        <Tooltip title="previous month">
          <Button
            onClick={() => {
              changeDate(moment(date).subtract(31, 'days'));
            }}
          >
            <ArrowBackIosIcon />
          </Button>
        </Tooltip>

        <Tooltip title="next month">
          <Button
            onClick={() => {
              changeDate(moment(date).add(31, 'days'));
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>

        <span className={classes.calendarDate}>
          {date!.locale(language).format(calendarMouthYear)}
        </span>

        <Tooltip title="search">
          <Button>
            <SearchIcon />
          </Button>
        </Tooltip>

        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={Formats}
            onChange={handleChangeView}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem
              value={Formats.MONTH}
              onClick={(e) => setViewFormat(Formats.MONTH)}
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
    </div>
  );
};
