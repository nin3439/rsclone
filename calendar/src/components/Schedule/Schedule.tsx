import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';
import 'moment/locale/pt';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { FormElement } from '../Form/Form';
import i18n from '../../i18ns';
import {
  setEvents,
  updateAllEvents,
} from '../../redux/reducers/ContentReducer';
import {
  updateActiveModal,
  updateDate,
  updateViewFormat,
} from '../../redux/reducers/UtilsReducers';

const localizer = momentLocalizer(moment);
export const EventsSchedule: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAllEvents());
    console.log('Gjlrk.xtybt ');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const viewFormat = useSelector((state: any) => state.utils.viewFormat);
  const setViewFormat = (view: string) => {
    dispatch(updateViewFormat(view));
  };
  const { events, holidaysBelarus } = useSelector(
    (state: any) => state.content
  );
  const isModalActive = useSelector((state: any) => state.utils.isModalActive);
  const changeModalActive = () => {
    dispatch(updateActiveModal());
  };
  const { date, isHolidaysSelected } = useSelector((state: any) => state.utils);
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
  moment(date).locale(`${i18n.language}`);
  const updateDateForm = (data: any) => {
    dispatch(setEvents(data));
  };
  return (
    <div>
      <Calendar
        style={{ height: '90vh' }}
        localizer={localizer}
        culture={i18n.language}
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
