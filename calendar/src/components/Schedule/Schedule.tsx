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
  changeActiveModal,
  changeDateCalendar,
  changeViewFormat,
} from '../../redux/actions/StateContolAction';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import classes from './styles/Schedule.module.scss';

export const Schedule: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAllEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const localizer = momentLocalizer(moment);
  const setViewFormat = (view: any) => {
    dispatch(changeViewFormat(view));
  };
  const { events, holidays } = useSelector((state: any) => state.content);
  const changeModalWindow = (event?: any): void => {
    console.log(event);
    dispatch(changeActiveModal());
  };
  const {
    date,
    isHolidaysSelected,
    viewFormat,
    isModalActive,
    language,
  } = useSelector((state: any) => state.stateControl);
  const changeDate = (dateValue: any) => {
    dispatch(changeDateCalendar(dateValue));
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
        className={classes.popa}
        style={{ height: '90vh' }}
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
          changeModalWindow(event);
        }}
        onSelectEvent={(event) => console.log(event)}
        popup
        step={15}
        timeslots={8}
        toolbar={false}
        view={viewFormat}
        onView={setViewFormat}
        events={getAllEvents()}
      />
      {isModalActive && (
        <FormElement
          updateDateForm={updateDateForm}
          changeModalActive={changeModalWindow}
        />
      )}
    </div>
  );
};
