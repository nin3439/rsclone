import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { Schedule } from './components/Schedule/Schedule';
import classes from './App.module.scss';
export const App = () => {
  const showBlock = useSelector((state: any) => state.stateControl.showBlock);
  return (
    <div className={classes.app}>
      <Header />
      {showBlock && <Widgets />}
      <div className={showBlock ? classes.width70 : classes.width100}>
        <Schedule />
      </div>
    </div>
  );
};
