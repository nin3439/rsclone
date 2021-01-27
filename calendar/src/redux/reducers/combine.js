import { combineReducers } from 'redux';
import { content } from './ContentReducer';
import { stateControl } from './StateContolReducers';
const createRootReducer = () =>
  combineReducers({
    content,
    stateControl,
  });
export default createRootReducer;
