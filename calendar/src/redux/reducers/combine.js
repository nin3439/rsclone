import { combineReducers } from 'redux';
import { content } from './ContentReducer.js';
import { stateControl } from './StateContolReducers';
const createRootReducer = () =>
  combineReducers({
    content,
    stateControl,
  });
export default createRootReducer;
