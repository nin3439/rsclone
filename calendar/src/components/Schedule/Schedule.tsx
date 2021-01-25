import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { FormElement } from '../Form/Form';
import moment from 'moment';
import { EventsScheduleProps, updateDateFormProps } from './Schedule.types';
import i18n from '../../i18ns';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';
import 'moment/locale/pt';
import { eventType } from '../../constants';
import axios from 'axios';
moment.locale(`${i18n.language}`);
const localizer = momentLocalizer(moment);
export const EventsSchedule: React.FC<EventsScheduleProps> = ({
  date,
  changeDate,
  events,
  setEvents,
  holidays,
  isHolidaysSelected,
  viewFormat,
  setViewFormat,
  t,
}) => {
  console.log(t('Next'));
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
  const route = 'todos';
  const baseURL = `http://localhost:3020/${route}`;
  const updateDateForm = async (props: updateDateFormProps) => {
    // switch (typeEvents) {
    //   case eventType.EVENTS:
    //     const dateEvents = {
    //       id: events.length + 1,
    //       typeEvents,
    //       title,
    //       listGuest,
    //       location,
    //       allDay: false,
    //       description,
    //       start: new Date(dateTimeStart),
    //       end: new Date(dateTimeEnd),
    //     };
    //     setEvents([...events, dateEvents]);
    //     break;
    //   case eventType.TASKS:
    //     const dateTasks = {
    //       id: events.length + 1,
    //       typeEvents,
    //       allDay: false,
    //       title,
    //       description,
    //       start: new Date(dateTimeStart),
    //       end: new Date(dateTimeEnd),
    //     };
    //     setEvents([...events, dateTasks]);
    //     break;
    //   default:
    //     console.log(typeEvents);
    //     break;
    // }
    const response = await axios({
      baseURL,
      method: 'post',
      data: props,
      url: '/',
    });
    console.log(response.data);
  };

  const addNewEvent = ({
    start,
    end,
  }: {
    start: Date | string;
    end: Date | string;
  }) => {
    setIsModalActive(true);
    // setEvents([
    //   ...events,
    //   {
    //     start,
    //     end,
    //   },
    // ]);
    // console.log(events);
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
          debugger;
          changeDate(moment(e));
        }}
        onSelectSlot={addNewEvent}
        onSelectEvent={(event) => console.log(event)}
        popup
        step={15}
        timeslots={8}
        toolbar={false}
        view={viewFormat}
        onView={setViewFormat}
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
      {isModalActive && (
        <FormElement
          updateDateForm={updateDateForm}
          changeModalActive={changeModalActive}
        />
      )}
    </div>
  );
};
