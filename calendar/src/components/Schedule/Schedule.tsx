import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { EventsScheduleProps } from './Schedule.types';
import { FormElement } from '../Form/Forms';
import moment from 'moment';

moment.locale('en-GB');

const localizer = momentLocalizer(moment);

export const EventsSchedule: React.FC<EventsScheduleProps> = ({
  date,
  changeDate,
  events,
  setEvents,
  holidays,
  isHolidaysSelected,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);

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
    start: object | string;
    end: object | string;
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
        //culture
        style={{ height: '90vh' }}
        localizer={localizer}
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
        toolbar
      />
      {isModalActive && <FormElement changeModalActive={changeModalActive} />}
    </div>
  );
};
