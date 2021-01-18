<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

>>>>>>> events
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { EventsSchedule } from './components/Content/Schedule/Schedule';
import { useTranslation } from 'react-i18next';
import './App.css';

export const App = () => {
  const [date, changeDate] = useState(new Date());
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Widgets date={date} changeDate={changeDate} />
      <div className="App-content">
        <EventsSchedule t={t} />
      </div>
    </div>
  );
};