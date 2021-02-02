import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';
import 'moment/locale/pt';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { FormElement } from '../Form/Form';
import { setEvents, updateAllEvents } from '../../redux/actions/contentAction';
import {
  updateActiveModal,
  updateDate,
  updateViewFormat,
} from '../../redux/actions/StateContolAction';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/Schedule.scss';
import { Events } from './Schedule.types';

export const Schedule: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAllEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const localizer = momentLocalizer(moment);
  const setViewFormat = (view: any) => {
    dispatch(updateViewFormat(view));
  };
  const { events, holidays } = useSelector((state: any) => state.content);

  const changeModalActive = () => {
    dispatch(updateActiveModal());
  };
  const {
    date,
    isHolidaysSelected,
    viewFormat,
    isModalActive,
    language,
  } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    dispatch(updateDate(dateValue));
  };
  const getAllEvents = () => {
    if (isHolidaysSelected) {
      return [...events, ...holidays];
    } else {
      return events;
    }
  };
  const updateDateForm = (data: any) => {
    dispatch(setEvents(data));
  };
  moment().locale(`${language}`);
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
        onSelectSlot={changeModalActive}
        onSelectEvent={(event) => console.log(event)}
        step={15}
        popup
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
          changeModalActive={changeModalActive}
        />
      )}
    </div>
  );
};
