import React, { useState } from "react";

import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import Schedule from './components/Content/Schedule/Schedule';

import './App.css';
import { render } from "react-dom";

export const App = () =>  {
  const [date, changeDate] = useState(new Date());

  return (
      <div className="App">
        <Header />
        <Widgets date={date} changeDate={changeDate} />
        <div className="App-content">
          <Schedule/>
        </div>
      </div>
  )}