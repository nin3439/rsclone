import React from 'react';
import i18n from '../../i18ns';
import classes from './Header.module.scss';
import moment from 'moment';
import { HeaderProps } from './Header.types';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';

export const Header: React.FC<HeaderProps> = ({
  showBlock,
  setShowBlock,
  date,
  changeDate,
  setViewFormat,
}) => {
  const getShowBlock = () => {
    showBlock ? setShowBlock(false) : setShowBlock(true);
  };
  const changeLanguage = (ln: string) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <div className={classes.header}>
      <div>
        <Tooltip title={'Menu'}>
          <IconButton>
            <MenuIcon onClick={getShowBlock} />
          </IconButton>
        </Tooltip>

        <img
          className={classes.calendarImage}
          src="http://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_18_2x.png#"
          alt="Logo"
        />
        <span className={classes.calendarName}>Calendar</span>

        <Tooltip title={moment().format('dddd, Do MMMM')}>
          <Button
            variant="outlined"
            onClick={() => {
              changeDate(moment());
            }}
          >
            Today
          </Button>
        </Tooltip>

        <Tooltip title={'previous month'}>
          <Button
            onClick={() => {
              changeDate(moment(date).subtract(31, 'days'));
            }}
          >
            <ArrowBackIosIcon />
          </Button>
        </Tooltip>

        <Tooltip title={'next month'}>
          <Button
            onClick={() => {
              changeDate(moment(date).add(31, 'days'));
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>

        <span className={classes.calendarDate}>
          {moment().format('MMMM YYYY')}
        </span>

        <Tooltip title={'search'}>
          <Button>
            <SearchIcon />
          </Button>
        </Tooltip>



        <button onClick={changeLanguage('en')}>EN</button>
        <button onClick={changeLanguage('ru')}>RU</button>
      </div>
    </div>
  );
};
