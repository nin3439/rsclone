import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { calendarFormats, dateFormats } from '../../constants/formats';
import { Languages } from '../../constants/Language';
import i18n from '../../i18ns';
import SearchIcon from '@material-ui/icons/Search';
import { SearchBlock } from './components/Search/Search';
import { useTranslation } from 'react-i18next';
import {
  changeLanguage,
  changeDateCalendar,
  changeShowBlock,
  changeViewFormat,
  updateSettingsOpen,
} from '../../redux/actions/StateContolAction';
import {
  Menu,
  ArrowBackIos,
  Today,
  ArrowForwardIos,
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
  ClickAwayListener,
} from '@material-ui/core/';
import { useStyles } from './styles/materialUIStyles';
import './styles/Header.scss';

export const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const classMaterial: any = useStyles();
  const { t }: any = useTranslation();
  const [sound, setSound] = useState(true);
  const setViewFormat = (view: string) => {
    dispatch(changeViewFormat(view));
  };
  const setShowBLock = () => {
    dispatch(changeShowBlock());
  };

  const { date, language, viewFormat, isSettingsOpen } = useSelector(
    (state: any) => state.stateControl
  );
  const changeDate = (dateValue: any) => {
    dispatch(changeDateCalendar(dateValue));
  };

  const handleChangeView = (event: any) => {
    setViewFormat(event.target.value);
  };
  const changeLanguages = (ln: string) => {
    dispatch(changeLanguage(ln));
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
        dateView = date!.locale(language).format(dateFormats.DAY);
        break;
      case calendarFormats.WEEK:
        dateView = `${date!
          .locale(language)
          .startOf('week')
          .format(dateFormats.WEEK)} - ${date!
          .locale(language)
          .endOf('week')
          .format(dateFormats.WEEK)}`;
        break;
      case calendarFormats.AGENDA:
        dateView = date!.locale(language).format(dateFormats.AGENDA);
        break;
      default:
        dateView = date!.locale(language).format(dateFormats.MONTH);
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
              onChange={(event: any) => changeLanguages(event.target.value)}
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
        <Tooltip title={t('Menu')}>
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
        <Tooltip title={moment().format(dateFormats.TODAY)}>
          <Button
            variant="outlined"
            onClick={() => {
              changeDate(moment());
              playSound();
            }}
          >
            {t('Today')}
          </Button>
        </Tooltip>

        <Tooltip title={t('Previous')}>
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
        <Tooltip title={t('Next')}>
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
        <Tooltip title="search">
          <ClickAwayListener onClickAway={() => setOpenSearch(false)}>
            <div className="searchBlock">
              <Button onClick={() => setOpenSearch(!openSearch)}>
                <SearchIcon />
              </Button>
              {openSearch ? <SearchBlock /> : null}
            </div>
          </ClickAwayListener>
        </Tooltip>
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
            {t('Month')}
          </MenuItem>
          <MenuItem
            value={calendarFormats.WEEK}
            onClick={() => setViewFormat(calendarFormats.WEEK)}
          >
            {t('Week')}
          </MenuItem>
          <MenuItem
            value={calendarFormats.DAY}
            onClick={() => setViewFormat(calendarFormats.DAY)}
          >
            {t('Day')}
          </MenuItem>
          <MenuItem
            value={calendarFormats.AGENDA}
            onClick={() => setViewFormat(calendarFormats.AGENDA)}
          >
            {t('Agenda')}
          </MenuItem>
        </Select>
        <Tooltip title={t('Settings')}>
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
