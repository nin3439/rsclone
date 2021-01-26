import moment from 'moment';
import { Formats } from '../../formats';
import { Parametr } from './constantsActionType';

let initialState = {
  showBlock: true,
  date: moment(),
  holidays: [],
  isHolidaysSelected: false,
  viewFormat: Formats.MONTH,
  isModalActive: false,
};

export const utils = (state = initialState, action) => {
  switch (action.type) {
    case Parametr.CHANGE_ACTIVE_MODAL:
      return { ...state, isModalActive: !state.isModalActive };
    case Parametr.CHANGE_VIEW_FORMAT:
      return { ...state, viewFormat: action.view };
    case Parametr.CHANGE_SHOW_BLOCK:
      return { ...state, showBlock: !state.showBlock };
    case Parametr.CHANGE_DATE:
      return { ...state, date: action.date };
    case Parametr.CHANGE_SELECTED_HOLIDAY:
      return { ...state, isHolidaysSelected: !state.isHolidaysSelected };
    default:
      return state;
  }
};

export const updateActiveModal = () => {
  return (dispatch, getState) => {
    dispatch(changeActiveModal());
  };
};
export const updateViewFormat = (view) => {
  return (dispatch, getState) => {
    dispatch(changeViewFormat(view));
  };
};

export const updateShowBlock = () => {
  return (dispatch, getState) => {
    dispatch(changeShowBlock());
  };
};
export const updateDate = (data) => {
  return (dispatch, getState) => {
    dispatch(changeDate(data));
  };
};

export const updateSelectedHoliday = () => {
  return (dispatch, getState) => {
    dispatch(changeSelectedHoliday());
  };
};
const changeSelectedHoliday = () => ({
  type: Parametr.CHANGE_SELECTED_HOLIDAY,
});
const changeDate = (date) => ({ type: Parametr.CHANGE_DATE, date });
const changeShowBlock = () => ({ type: Parametr.CHANGE_SHOW_BLOCK });
const changeViewFormat = (view) => ({
  type: Parametr.CHANGE_VIEW_FORMAT,
  view,
});
const changeActiveModal = () => ({ type: Parametr.CHANGE_ACTIVE_MODAL });
