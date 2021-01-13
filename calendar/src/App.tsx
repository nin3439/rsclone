import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { Content } from './components/Content/Content';
import { ContentOfDay } from './components/Content/ContentOfDay/ContentOfDay';
import { ContentOfWeek } from './components/Content/ContentOfWeek/ContentOfWeek';
import { ContentOfMonth } from './components/Content/ContentOfMonth/ContentOfMonth';
import { ContentOfYear } from './components/Content/ContentOfYear/ContentOfYear';
import { ContentOfSchedule } from './components/Content/ContentOfShedule/ContentOfSchedule';
import { ContentOfFourDay } from './components/Content/ContentOfFourDay/ContentOfFourDay';
import Schedule from './components/Content/Schedule/Schedule';

import './App.css';

export const App = () =>  {
  const [date, changeDate] = useState(new Date());
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Widgets date={date} changeDate={changeDate} />
        <div className="App-content">
          <Route exact path="/" component={Content} />
          <Route exact path="/day" component={ContentOfDay} />
          <Route exact path="/week" component={ContentOfWeek} />
          <Route exact path="/month" component={ContentOfMonth} />
          <Route exact path="/year" component={ContentOfYear} />
          <Route exact path="/schedule" component={ContentOfSchedule} />
          <Route exact path="/fourDay" component={ContentOfFourDay} />
        </div>
      </BrowserRouter>
  );
};
