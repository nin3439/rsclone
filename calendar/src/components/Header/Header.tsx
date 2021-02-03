import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';
import { calendarFormats, dateFormats } from '../../constants/formats';
import { Languages } from '../../constants/Language';
import { SearchBlock } from './components/Search/Search';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18ns';
import { playSound } from '../../utils/playSound';
import {
  changeLanguage,
  changeDateCalendar,
  changeShowBlock,
  changeViewFormat,
  changeSettingsOpen,
  changeSound,
} from '../../redux/actions/StateContolAction';
import {
  Menu,
  ArrowBackIos,
  Today,
  ArrowForwardIos,
  Settings,
  Search,
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
  const setViewFormat = (view: string) => {
    dispatch(changeViewFormat(view));
  };
  const setShowBLock = () => {
    dispatch(changeShowBlock());
  };

  const { date, language, viewFormat, isSettingsOpen, isSoundOn } = useSelector(
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
    dispatch(changeSettingsOpen(true));
  };

  const closeSettings = () => {
    dispatch(changeSettingsOpen(false));
  };

  const toggleSound = () => {
    dispatch(changeSound());
  };

  useHotkeys('ctrl+z', () => toggleSound());
  useHotkeys('shift+i', () => changeLanguages(Languages.IT));
  useHotkeys('shift+d', () => changeLanguages(Languages.DE));
  useHotkeys('shift+e', () => changeLanguages(Languages.EN));
  useHotkeys('shift+p', () => changeLanguages(Languages.PT));
  useHotkeys('shift+r', () => changeLanguages(Languages.RU));

  const changeViewDate = () => {
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
            <InputLabel>{t('Language')}</InputLabel>
            <Select
              onClick={() => playSound(isSoundOn)}
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
                onClick={() => playSound(isSoundOn)}
                checked={isSoundOn}
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
          <IconButton className={classMaterial.iconHover}>
            <Menu
              onClick={() => {
                setShowBLock();
                playSound(isSoundOn);
              }}
            />
          </IconButton>
        </Tooltip>

        <Today color="action" />
        <span className="calendar-name">{t('Calendar')}</span>
        <Tooltip title={moment().format(dateFormats.TODAY)}>
          <Button
            className={classMaterial.buttonHover}
            variant="outlined"
            onClick={() => {
              changeDate(moment());
              playSound(isSoundOn);
            }}
          >
            {t('Today')}
          </Button>
        </Tooltip>

        <Tooltip title={t('Previous')}>
          <IconButton
            className={classMaterial.iconHover}
            onClick={() => {
              switch (viewFormat) {
                case calendarFormats.WEEK:
                  return changeDate(moment(date).subtract(7, 'days'));
                case calendarFormats.DAY:
                  return changeDate(moment(date).subtract(1, 'day'));
                default:
                  changeDate(moment(date).subtract(1, 'months'));
              }
              playSound(isSoundOn);
            }}
          >
            <ArrowBackIos className={classMaterial.arrowLeft} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('Next')}>
          <IconButton
            className={classMaterial.iconHover}
            onClick={() => {
              switch (viewFormat) {
                case calendarFormats.WEEK:
                  return changeDate(moment(date).add(7, 'days'));
                case calendarFormats.DAY:
                  return changeDate(moment(date).add(1, 'day'));
                default:
                  changeDate(moment(date).add(1, 'months'));
              }
              playSound(isSoundOn);
            }}
          >
            <ArrowForwardIos className={classMaterial.arrowRight} />
          </IconButton>
        </Tooltip>
      </div>
      <div className="date-wrapper">
        <span className="calendar-date">{changeViewDate()}</span>
      </div>
      <div className="search-settings-wrapper">
        <Tooltip title="search">
          <ClickAwayListener onClickAway={() => setOpenSearch(false)}>
            <div className="searchBlock">
              <IconButton
                className={classMaterial.iconHover}
                onClick={() => {
                  setOpenSearch(!openSearch);
                  playSound(isSoundOn);
                }}
              >
                <Search />
              </IconButton>
              {openSearch ? <SearchBlock /> : null}
            </div>
          </ClickAwayListener>
        </Tooltip>
        <Select
          className={classMaterial.select}
          value={viewFormat}
          onChange={handleChangeView}
          displayEmpty
          inputProps={{
            'aria-label': 'Without label',
          }}
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
            className={classMaterial.iconHover}
            onClick={() => {
              openSettings();
              playSound(isSoundOn);
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
