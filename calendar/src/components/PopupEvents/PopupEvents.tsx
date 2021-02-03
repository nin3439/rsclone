import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeActiveModal,
  changeActivePopup,
} from '../../redux/actions/StateContolAction';
import { Box, Tooltip } from '@material-ui/core';
import {
  AccessTime,
  Close,
  LocationOnOutlined,
  PeopleOutlineRounded,
  SubjectOutlined,
  DeleteOutlined,
  CreateOutlined,
} from '@material-ui/icons';
import { useStyles } from './styles/materialUiStyles';
import moment from 'moment';
import {
  removeEvent,
  updateSelectedEvents,
} from '../../redux/actions/contentAction';
import { useTranslation } from 'react-i18next';
import { eventType } from '../../constants/Language';
export const PopupEventsInformation = () => {
  const {
    id,
    title,
    start,
    end,
    location,
    listGuest,
    typeEvents,
    description,
  } = useSelector((state: any) => state.content.dataSelectedEvents);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(changeActivePopup());
    dispatch(updateSelectedEvents({}));
  };
  const { language } = useSelector((state: any) => state.stateControl);
  const remove = () => {
    dispatch(removeEvent(id));
  };
  const { t }: any = useTranslation();
  const intervalDate = () => {
    const monthStart = moment(start).locale(language).format('D MMMM');
    const monthEnd = moment(end).locale(language).format('D MMMM');
    const yearStart = moment(start).locale(language).format('YYYY, h:mm');
    const yearEnd = moment(end).locale(language).format('YYYY, h:mm');
    const nameDay = moment(start).locale(language).format('dddd');
    const hours = moment(start).locale(language).format('h:mm');

    switch (typeEvents) {
      case eventType.EVENTS:
        return `${monthStart} ${yearStart} - ${monthEnd} ${yearEnd}`;
      case eventType.TASKS:
        return (
          <div>
            <div>
              {nameDay},{monthStart}
            </div>
            <div>{hours}</div>
          </div>
        );
      case eventType.REMINDERS:
        return `${monthStart} ${yearStart}`;

      case eventType.HOLIDAYS_BELARUS:
        return `${nameDay}, ${monthStart}`;

      default:
        return `${monthStart} ${yearStart} - ${monthEnd} ${yearEnd}`;
    }
  };
  const changeModalWindow = (): void => {
    dispatch(changeActivePopup());
    dispatch(changeActiveModal());
  };
  const classMaterial: any = useStyles();
  const colorBox = () => {
    switch (typeEvents) {
      case eventType.EVENTS:
        return classMaterial.eventColor;
      case eventType.TASKS:
        return classMaterial.taskColor;
      case eventType.REMINDERS:
        return classMaterial.reminderColor;
      case eventType.HOLIDAYS_BELARUS:
        return classMaterial.holidaysBelerusColor;
      default:
        return classMaterial.eventColor;
    }
  };
  return (
    <Box
      className={`${classMaterial.overlay} ${classMaterial.active}`}
      onClick={closePopup}
    >
      <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          {typeEvents !== eventType.HOLIDAYS_BELARUS && (
            <>
              <Tooltip title={t('Edit')}>
                <CreateOutlined
                  className={classMaterial.icons}
                  color="action"
                  onClick={changeModalWindow}
                />
              </Tooltip>
              <Tooltip title={t('Delete')}>
                <DeleteOutlined
                  className={classMaterial.icons}
                  color="action"
                  onClick={remove}
                />
              </Tooltip>
            </>
          )}
          <Tooltip title={t('Close')}>
            <Close
              className={classMaterial.icons}
              color="action"
              onClick={closePopup}
            />
          </Tooltip>
        </Box>
        <Box className={classMaterial.box}>
          <Box component="span" className={colorBox()}></Box>
          <Box component="span" className={classMaterial.information}>
            <Box component="span" className={classMaterial.title}>
              {' '}
              {title}
            </Box>
            {typeEvents === eventType.EVENTS && (
              <Box component="span" display="block">
                {intervalDate()}
              </Box>
            )}
          </Box>
        </Box>

        {typeEvents !== eventType.EVENTS && (
          <Box className={classMaterial.box}>
            <AccessTime />
            <Box component="span" className={classMaterial.informationEvent}>
              {intervalDate()}
            </Box>
          </Box>
        )}
        {listGuest && (
          <Box className={classMaterial.box}>
            <PeopleOutlineRounded />
            <Box component="span" className={classMaterial.informationEvent}>
              {listGuest}
            </Box>
          </Box>
        )}
        {location && (
          <Box className={classMaterial.box}>
            <LocationOnOutlined />
            <Box component="span" className={classMaterial.informationEvent}>
              {location}
            </Box>
          </Box>
        )}
        {description && (
          <Box className={classMaterial.box}>
            <SubjectOutlined />
            <Box component="span" className={classMaterial.informationEvent}>
              {description}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
