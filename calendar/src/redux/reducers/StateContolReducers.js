import moment from 'moment';
import { calendarFormats } from '../../constants/formats';
import { Parametr } from '../../constants/constantsActionType';
import { momentUpdate } from '../../constants/dateTimeLocal';
let initialState = {
  showBlock: true,
  date: moment(),
  isHolidaysSelected: false,
  viewFormat: calendarFormats.MONTH,
  isModalActive: false,
  language: 'en',
  isSettingsOpen: false,
  startDataOnClick: '',
  endDataOnClick: '',
  isPopupActiv: false,
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

    case Parametr.CHANGE_SETTINGS_OPEN:
      return { ...state, isSettingsOpen: action.boolean };

    case Parametr.CHANGE_DATE_ONCLICK:
      debugger;
      return {
        ...state,
        startDataOnClick: action.date.start
          ? momentUpdate(action.date.start)
          : '',
        endDataOnClick: action.date.end ? momentUpdate(action.date.end) : '',
      };
    case Parametr.CHANGE_ACTIVE_POPUP:
      return {
        ...state,
        isPopupActiv: !state.isPopupActiv,
      };

    default:
      return state;
  }
};
