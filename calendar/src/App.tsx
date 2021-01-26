import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { EventsSchedule } from './components/Schedule/Schedule';
import moment, { Moment } from 'moment';
import { Events } from './App.types';
import './App.css';
export const App = () => {
  const [isHolidaysSelected, setIsHolidaysSelected] = useState<boolean>(false);
  const showBlock = useSelector((state: any) => state.utils.showBlock);
  return (
    <div className="App">
      <Header />
      {showBlock && <Widgets />}
      <div className="App-content">
        <EventsSchedule />
      </div>
    </div>
  );
};
