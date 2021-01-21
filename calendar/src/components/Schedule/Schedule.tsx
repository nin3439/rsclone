import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { FormElement } from '../Form/Forms';
import moment from 'moment';
import { EventsScheduleProps } from './Schedule.types';
import i18n from '../../i18ns';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';
moment.locale(`${i18n.language}`);
const localizer = momentLocalizer(moment);
export const EventsSchedule: React.FC<EventsScheduleProps> = ({
  date,
  changeDate,
  events,
  setEvents,
  holidays,
  isHolidaysSelected,
  t,
}) => {
  console.log(t('Next'));
  const [isModalActive, setIsModalActive] = useState(false);
  debugger;
  const getAllEvents = () => {
    if (isHolidaysSelected) {
      return [...events, ...holidays];
    } else {
      return events;
    }
  };

  const changeModalActive = () => {
    setIsModalActive(false);
  };

  const addNewEvent = ({
    start,
    end,
  }: {
    start: Date | string;
    end: Date | string;
  }) => {
    setIsModalActive(true);
    setEvents([
      ...events,
      {
        start,
        end,
      },
    ]);
  };
  return (
    <div>
      <Calendar
        style={{ height: '90vh' }}
        localizer={localizer}
        culture={i18n.language}
        events={getAllEvents()}
        startAccessor="start"
        date={date?.toDate()}
        endAccessor="end"
        selectable
        onNavigate={(e) => {
          changeDate(moment(e));
        }}
        onSelectSlot={addNewEvent}
        onSelectEvent={(event) => alert(event.title)}
        popup
        step={15}
        timeslots={8}
        messages={{
          next: t('Next'),
          previous: t('Back'),
          today: t('Today'),
          month: t('Month'),
          week: t('Week'),
          day: t('Day'),
          agenda: t('Agenda'),
        }}
      />
      {isModalActive && <FormElement changeModalActive={changeModalActive} />}
    </div>
  );
};
