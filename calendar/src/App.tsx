import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { EventsSchedule } from './components/Schedule/Schedule';
import moment, { Moment } from 'moment';
import examplesOfEvents from './events';
import { Events } from './App.types';
import './App.css';

export const App = () => {
  const [events, setEvents] = useState(examplesOfEvents);
  const [holidays, setHolidays] = useState<Events[]>([]);
  const [isHolidaysSelected, setIsHolidaysSelected] = useState<boolean>(false);
  const [date, changeDate] = useState<Moment | null>(moment());
  const [showBlock, setShowBlock] = useState<boolean>(true);
  return (
    <div className="App">
      <Header
        showBlock={showBlock}
        setShowBlock={setShowBlock}
        date={date}
        changeDate={changeDate}
      />
      {showBlock ? <Widgets
        date={date}
        changeDate={changeDate}
        holidays={holidays}
        setHolidays={setHolidays}
        isHolidaysSelected={isHolidaysSelected}
        setIsHolidaysSelected={setIsHolidaysSelected}
      /> : null}
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
