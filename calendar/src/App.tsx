import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { Schedule } from './components/Schedule/Schedule';
import { CSSTransition } from 'react-transition-group';
import './App.scss';

export const App = () => {
  const showBlock = useSelector((state: any) => state.stateControl.showBlock);
  return (
    <div className="app">
      <Header />
      <div className="content">
        {showBlock && <Widgets />}
        <CSSTransition in={showBlock} timeout={500} classNames="block">
          <div className="schedule">
            <Schedule />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
