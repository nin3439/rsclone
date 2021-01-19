import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Schedule from './components/Schedule/Schedule';
import moment, { Moment } from 'moment';
import { useTranslation } from 'react-i18next';

import './App.css';

export const App = () => {
  const [date, changeDate] = useState<Moment | null>(moment());
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Sidebar date={date} changeDate={changeDate} />
      <Schedule t={t} date={date} changeDate={changeDate} />
    </div>
  );
};
