import { combineReducers } from 'redux';
import { content } from './ContentReducer.js';
import { stateControl } from './StateContolReducers';
import auth from './auth.js';
const createRootReducer = () =>
  combineReducers({
    content,
    stateControl,
    auth,
  });
export default createRootReducer;
