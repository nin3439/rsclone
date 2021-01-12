import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

<<<<<<< HEAD
import {Header} from "./components/Header/Header";
import {Widgets} from "./components/Widgets/Widgets";
import {Content} from "./components/Content/Content";
import {ContentOfDay} from "./components/Content/ContentOfDay/ContentOfDay.jsx";
import {ContentOfWeek} from "./components/Content/ContentOfWeek/ContentOfWeek";
import {ContentOfMonth} from "./components/Content/ContentOfMonth/ContentOfMonth";
import {ContentOfYear} from "./components/Content/ContentOfYear/ContentOfYear";
import {ContentOfSchedule} from "./components/Content/ContentOfShedule/ContentOfSchedule";
import {ContentOfFourDay} from "./components/Content/ContentOfFourDay/ContentOfFourDay";
=======
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
>>>>>>> 8934db09203c16175b5db89e514ffc6f88634186

import './App.css';

export const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Widgets />
          <div className="App-content">
            <Route exact path="/" component={Schedule} />
            <Route exact path="/day" component={ContentOfDay} />
            <Route exact path="/week" component={ContentOfWeek} />
            <Route exact path="/month" component={ContentOfMonth} />
            <Route exact path="/year" component={ContentOfYear} />
            <Route exact path="/schedule" component={ContentOfSchedule} />
            <Route exact path="/fourDay" component={ContentOfFourDay} />
          </div>
        </div>
      </BrowserRouter>
  );
};
