import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Header } from './components/Header/Header';
import { Widgets } from './components/Widgets/Widgets';
import { Schedule } from './components/Schedule/Schedule';
import { CSSTransition } from 'react-transition-group';
import { SignIn } from './components/loginForm/loginForm.js';
import { SignUp } from './components/formRegistration.js/reistration';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { auth } from './redux/actions/actionAuth';

export const App = () => {
  const showBlock = useSelector((state: any) => state.stateControl.showBlock);
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      {!isAuth ? (
        <Switch>
          <Route path="/registration" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Redirect to="/login" />
        </Switch>
      ) : (
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
      )}
    </BrowserRouter>
  );
};
