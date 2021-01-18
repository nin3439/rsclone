import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { EventsScheduleProps } from './Schedule.types';
import moment from 'moment';
import classes from './styles/Schedule.module.scss';

moment.locale('en-GB');

const localizer = momentLocalizer(moment);

const EventsSchedule: React.FC<EventsScheduleProps> = ({
  date,
  changeDate,
  events,
  setEvents,
  holidays,
  isHolidaysSelected,
}) => {
  const getAllEvents = () => {
    if (isHolidaysSelected) {
      return [...events, ...holidays];
    } else {
      return events;
    }
  };

  const addNewEvent = ({
    start,
    end,
  }: {
    start: object | string;
    end: object | string;
  }) => {
    const title = window.prompt('New Event name');
    if (title)
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className={classes.schedule}>
      <Calendar
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
    </div>
  );
};

export default EventsSchedule;
