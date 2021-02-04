import Loader from 'react-loader-spinner';
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
      <div className="appLoader">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={650}
        />
      </div>
      <Header />
      <div className="content">
        <CSSTransition in={showBlock} timeout={500} classNames="block">
          <Widgets />
        </CSSTransition>
        <div className="schedule">
          <Schedule />
        </div>
      </div>
    </div>
  );
};
