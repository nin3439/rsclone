import moment from 'moment';
import { Formats } from '../../constants/formats';
import { Parametr } from '../constantsActionType';

let initialState = {
  showBlock: true,
  date: moment(),
  isHolidaysSelected: false,
  viewFormat: Formats.MONTH,
  isModalActive: false,
  language: 'en',
  startDataOnClick: new Date(),
  endDataOnClick: new Date(),
};

export const stateControl = (state = initialState, action) => {
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
    case Parametr.CHANGE_LANGUAGE:
      return { ...state, language: action.lang };
    case Parametr.CHANGE_DATE_ONCLICK:
      return {
        ...state,
        startDataOnClick: action.date.start,
        endDataOnClick: action.date.end,
      };
    default:
      return state;
  }
};
