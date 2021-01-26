import moment from 'moment';
import { Formats } from '../../formats';

const CHANGE_ACTIVE_MODAL = 'CHANGE_ACTIVE_MODAL';
const CHANGE_VIEW_FORMAT = 'CHANGE_VIEW_FORMAT';
const CHANGE_SHOW_BLOCK = 'CHANGE_SHOW_BLOCK';
const CHANGE_DATE = 'CHANGE_DATE';
const CHANGE_SELECTED_HOLIDAY = 'CHANGE_SELECTED_HOLIDAY';
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
    case CHANGE_ACTIVE_MODAL:
      return { ...state, isModalActive: !state.isModalActive };
    case CHANGE_VIEW_FORMAT:
      return { ...state, viewFormat: action.view };
    case CHANGE_SHOW_BLOCK:
      return { ...state, showBlock: !state.showBlock };
    case CHANGE_DATE:
      return { ...state, date: action.date };
    case CHANGE_SELECTED_HOLIDAY:
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
const changeSelectedHoliday = () => ({ type: CHANGE_SELECTED_HOLIDAY });
const changeDate = (date) => ({ type: CHANGE_DATE, date });
const changeShowBlock = () => ({ type: CHANGE_SHOW_BLOCK });
const changeViewFormat = (view) => ({ type: CHANGE_VIEW_FORMAT, view });
const changeActiveModal = () => ({ type: CHANGE_ACTIVE_MODAL });
