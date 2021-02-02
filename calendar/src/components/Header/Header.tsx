import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { calendarFormats } from '../../constants/formats';
import { Languages } from '../../constants/constants';
import i18n from '../../i18ns';
import {
  updateDate,
  updateShowBlock,
  updateViewFormat,
  updateLanguage,
  updateSettingsOpen,
} from '../../redux/actions/StateContolAction';
import {
  Menu,
  ArrowBackIos,
  Today,
  ArrowForwardIos,
  Search,
  Settings,
} from '@material-ui/icons';
import {
  IconButton,
  Button,
  Tooltip,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Dialog,
  DialogContent,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core/';
import { useStyles } from './styles/materialUIStyles';
import './styles/Header.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const classMaterial: any = useStyles();
  const { t } = useTranslation();
  const [sound, setSound] = useState(true);
  const setViewFormat = (view: string) => {
    dispatch(updateViewFormat(view));
  };
  const setShowBLock = () => {
    dispatch(updateShowBlock());
  };

  const { date, language, viewFormat, isSettingsOpen } = useSelector(
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
  const openSettings = () => {
    dispatch(updateSettingsOpen(true));
  };

  const closeSettings = () => {
    dispatch(updateSettingsOpen(false));
  };

  const playSound = () => {
    if (!sound) return;
    const audio = new Audio();
    audio.src = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`;
    audio.play();
  };

  const toggleSound = () => {
    setSound(!sound);
  };

  const changeViewDate = () => {
    console.log();
    let dateView;
    switch (viewFormat) {
      case calendarFormats.DAY:
        dateView = date!.locale(language).format('dddd MMM D');
        break;
      case calendarFormats.WEEK:
        dateView = `${date!
          .locale(language)
          .startOf('week')
          .format('dddd MMM D')}-${date!
          .locale(language)
          .endOf('week')
          .format('dddd MMM D')}`;
        break;
      default:
        dateView = date!.locale(language).format(calendarMouthYear);
    }
    return dateView;
  };
  const SimpleDialog = () => {
    return (
      <Dialog
        aria-labelledby="settings"
        open={isSettingsOpen}
        onClose={closeSettings}
      >
        <DialogContent className={classMaterial.dialog}>
          <FormControl className="form-control">
            <InputLabel>Language</InputLabel>
            <Select
              value={language}
              onChange={(event: any) => changeLanguage(event.target.value)}
            >
              <MenuItem value={Languages.EN}>English</MenuItem>
              <MenuItem value={Languages.RU}>Русский</MenuItem>
              <MenuItem value={Languages.DE}>Deutsche</MenuItem>
              <MenuItem value={Languages.IT}>Italiano</MenuItem>
              <MenuItem value={Languages.PT}>Português</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            className={classMaterial.label}
            control={
              <Checkbox
                checked={sound}
                color="primary"
                onChange={toggleSound}
              />
            }
            label={t('Sound')}
            labelPlacement="start"
          />
        </DialogContent>
      </Dialog>
    );
  };
  return (
    <div className="header">
      <div className="menu-calendar-wrapper">
        <Tooltip title="Menu">
          <IconButton>
            <Menu
              onClick={() => {
                setShowBLock();
                playSound();
              }}
            />
          </IconButton>
        </Tooltip>

        <Today />
        <span className="calendar-name">{t('Calendar')}</span>
        <Tooltip title={moment().format(calendarTodayDate)}>
          <Button
            variant="outlined"
            onClick={() => {
              changeDate(moment());
              playSound();
            }}
          >
            Today
          </Button>
        </Tooltip>

        <Tooltip title="Previous">
          <Button
            onClick={() => {
              switch (viewFormat) {
                case calendarFormats.WEEK:
                  return changeDate(moment(date).subtract(7, 'days'));
                case calendarFormats.DAY:
                  return changeDate(moment(date).subtract(1, 'day'));
                default:
                  changeDate(moment(date).subtract(1, 'months'));
              }
              playSound();
            }}
          >
            <ArrowBackIos />
          </Button>
        </Tooltip>
        <Tooltip title="Next">
          <Button
            onClick={() => {
              switch (viewFormat) {
                case calendarFormats.WEEK:
                  return changeDate(moment(date).add(7, 'days'));
                case calendarFormats.DAY:
                  return changeDate(moment(date).add(1, 'day'));
                default:
                  changeDate(moment(date).add(1, 'months'));
              }
              playSound();
            }}
          >
            <ArrowForwardIos />
          </Button>
        </Tooltip>
      </div>
      <div className="date-wrapper">
        <span className="calendar-date">{changeViewDate()}</span>
      </div>
      <div className="search-settings-wrapper">
        <Tooltip title="Search">
          <Button
            onClick={() => {
              playSound();
            }}
          >
            <Search />
          </Button>
        </Tooltip>
        {/* 
        <FormControl variant="outlined" className="form-control-view"> */}
        <Select
          value={viewFormat}
          onChange={handleChangeView}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          variant="outlined"
        >
          <MenuItem
            value={calendarFormats.MONTH}
            onClick={() => setViewFormat(calendarFormats.MONTH)}
          >
            Month
          </MenuItem>
          <MenuItem
            value={calendarFormats.WEEK}
            onClick={() => setViewFormat(calendarFormats.WEEK)}
          >
            Week
          </MenuItem>
          <MenuItem
            value={calendarFormats.DAY}
            onClick={() => setViewFormat(calendarFormats.DAY)}
          >
            Day
          </MenuItem>
          <MenuItem
            value={calendarFormats.AGENDA}
            onClick={() => setViewFormat(calendarFormats.AGENDA)}
          >
            Agenda
          </MenuItem>
        </Select>
        {/* </FormControl> */}

        <Tooltip title="Settings">
          <IconButton
            onClick={() => {
              openSettings();
              playSound();
            }}
          >
            <Settings />
          </IconButton>
        </Tooltip>
        <SimpleDialog />
      </div>
    </div>
  );
};
