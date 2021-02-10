import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';
import 'moment/locale/pt';
import 'moment/locale/it';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { FormElement } from '../Form/Form';
import {
  setEvents,
  updateAllEvents,
  updateSelectedEvents,
} from '../../redux/actions/contentAction';
import {
  changeActiveModal,
  changeActivePopup,
  changeDateCalendar,
  changeDateOnClick,
  changeViewFormat,
} from '../../redux/actions/StateContolAction';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/Schedule.scss';
import { Events } from './Schedule.types';
import { PopupEventsInformation } from '../PopupEvents/PopupEvents';
import { eventType } from '../../constants/Language';
export const Schedule: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAllEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setViewFormat = (view: any) => {
    dispatch(changeViewFormat(view));
  };
  const { events, holidays, isSelectedReminders, isSelectedTask } = useSelector(
    (state: any) => state.content
  );
  const changeModalWindow = (): void => {
    dispatch(changeActiveModal());
    dispatch(changeDateOnClick({}));
    if (isModalActive) dispatch(updateSelectedEvents({}));
  };
  const {
    date,
    isHolidaysSelected,
    viewFormat,
    isModalActive,
    language,
    isPopupActiv,
  } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    dispatch(changeDateCalendar(dateValue));
  };
  const getAllEvents = () => {
    const chengeEvents = events.filter((event: any) => {
      if (event.typeEvents === eventType.TASKS && isSelectedTask) {
        return event;
      } else if (
        event.typeEvents === eventType.REMINDERS &&
        isSelectedReminders
      ) {
        return event;
      } else if (event.typeEvents === eventType.EVENTS) {
        return event;
      }
      return '';
    });
    if (isHolidaysSelected) {
      return [...chengeEvents, ...holidays];
    } else {
      return chengeEvents;
    }
  };
  const updateDateForm = (data: any) => {
    dispatch(setEvents(data));
  };
  const selectedSlot = (e: any) => {
    dispatch(updateSelectedEvents(e));
    dispatch(changeActivePopup());
  };
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar
        className="schedule"
        localizer={localizer}
        culture={language}
        startAccessor="start"
        date={date?.toDate()}
        endAccessor="end"
        selectable
        onNavigate={(e) => {
          changeDate(moment(e));
        }}
        onSelectSlot={(event) => {
          dispatch(changeDateOnClick(event));
          changeModalWindow();
        }}
        onSelectEvent={(event) => selectedSlot(event)}
        step={15}
        timeslots={4}
        toolbar={false}
        view={viewFormat}
        onView={setViewFormat}
        events={getAllEvents()}
        eventPropGetter={(event: Events) => ({
          className: `type-${event.typeEvents} events`,
        })}
      />
      {isModalActive && (
        <FormElement
          updateDateForm={updateDateForm}
          changeModalActive={changeModalWindow}
        />
      )}
      {isPopupActiv && <PopupEventsInformation />}
    </div>
  );
};
