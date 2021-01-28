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
  const { events, holidaysBelarus } = useSelector(
    (state: any) => state.content
  );
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
      return [...events, ...holidaysBelarus];
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
        onSelectSlot={changeModalActive}
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
          changeModalActive={changeModalActive}
        />
      )}
    </div>
  );
};
