import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { EventsSchedule } from './components/Schedule/Schedule';
import moment, { Moment } from 'moment';
import someEvents from './events';
import { Events } from './App.types';
import './App.css';

export const App = () => {
  const [events, setEvents] = useState(someEvents);
  const [holidays, setHolidays] = useState<Events[]>([]);
  const [isHolidaysSelected, setIsHolidaysSelected] = useState<boolean>(false);
  const [date, changeDate] = useState<Moment | null>(moment());
  return (
    <div className="App">
      <Header />
      <Widgets
        date={date}
        changeDate={changeDate}
        holidays={holidays}
        setHolidays={setHolidays}
        isHolidaysSelected={isHolidaysSelected}
        setIsHolidaysSelected={setIsHolidaysSelected}
      />
      <div className="App-content">
        <EventsSchedule
          date={date}
          changeDate={changeDate}
          events={events}
          setEvents={setEvents}
          holidays={holidays}
          isHolidaysSelected={isHolidaysSelected}
        />
      </div>
    </div>
  );
};
