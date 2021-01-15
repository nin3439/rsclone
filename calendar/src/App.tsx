import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import Schedule from './components/Schedule/Schedule';


import './App.css';

export const App = () => {
  const [date, changeDate] = useState<any>(new Date());
 
  return (
    <div className="App">
      <Header />
      <Sidebar
        date={date}
        changeDate={changeDate}
      />
      <Schedule date={date} changeDate={changeDate} />
    </div>
  );
};
