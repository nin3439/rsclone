import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { EventsSchedule } from './components/Content/Schedule/Schedule';
import { useTranslation } from 'react-i18next';
import moment, {  Moment } from 'moment'
import './App.css';

export const App = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(true);
  const [date, changeDate] = useState<Moment | null>(moment());
  return (
    <div className="App">
      {t('create')}
      <Header />
      <Widgets date={date} changeDate={changeDate} />
      <div className="App-content">
        <EventsSchedule date={date} changeDate={changeDate}/>
      </div>
    </div>
  );
};
