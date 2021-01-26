import { combineReducers } from 'redux';
import { content } from './ContentReducer';
import { utils } from './ParametrReducers';
const createRootReducer = () =>
  combineReducers({
    content,
    utils,
  });
export default createRootReducer;
