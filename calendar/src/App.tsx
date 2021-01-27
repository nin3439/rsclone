import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { Schedule } from './components/Schedule/Schedule';

import './App.css';
export const App = () => {
  const showBlock = useSelector((state: any) => state.stateControl.showBlock);
  return (
    <div className="App">
      <Header />
      {showBlock && <Widgets />}
      <div className="App-content">
        <Schedule />
      </div>
    </div>
  );
};
