import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import { SignIn } from './components/loginForm/loginForm.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <SignIn /> */}
  </Provider>,
  document.getElementById('root')
);
