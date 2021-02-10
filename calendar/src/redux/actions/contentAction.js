import {
  getAllEvents,
  postEvent,
  getHolidaysBelarus,
  putEvent,
  remove,
} from '../../api/eventsApi.ts';
import { Content } from '../../constants/constantsActionType';
import { changeActivePopup } from './StateContolAction';

export const setHolidaysBelarus = (holidays) => ({
  type: Content.SET_HOLIDAYS_BELARUS,
  holidays,
});
export const createEvent = (event) => ({ type: Content.CREATE_EVENT, event });
export const updateEvents = (events) => ({
  type: Content.GET_EVENTS,
  events,
});

export const updateAllEvents = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.currentUser.id;
    getAllEvents(userId).then(({ data }) => {
      dispatch(updateEvents(data));
    });
  };
};

export const setEvents = (data) => {
  return (dispatch, getState) => {
    const userId = getState().auth.currentUser.id;
    postEvent(data, userId).then(({ data }) => {
      dispatch(createEvent(data));
    });
  };
};

export const updateHolidaysBelarus = () => {
  return (dispatch, getState) => {
    const state = getState();
    const isHolidaysSelected = state.stateControl.isHolidaysSelected;
    const selectedYear = state.stateControl.date.format('YYYY');
    if (isHolidaysSelected) {
      getHolidaysBelarus(selectedYear).then(({ data }) => {
        dispatch(setHolidaysBelarus(data.response.holidays));
      });
    } else {
      dispatch(setHolidaysBelarus([]));
    }
  };
};
export const removeEvent = (id) => {
  return (dispatch, getState) => {
    const userId = getState().auth.currentUser.id;
    remove(id, userId).then(() => {
      dispatch(updateRemoveEvent(id));
    });
    dispatch(changeActivePopup());
    dispatch(updateSelectedEvents({}));
  };
};
export const updateEvent = (dataEvent, id) => {
  return (dispatch, getState) => {
    const userId = getState().auth.currentUser.id;
    putEvent(dataEvent, id, userId).then(({ data }) => {
      dispatch(changeEvent(id, data));
    });
    dispatch(updateSelectedEvents({}));
  };
};
const changeEvent = (id, event) => ({ type: Content.UPDATE_EVENT, id, event });
const updateRemoveEvent = (id) => ({ type: Content.REMOVE_EVENT, id });
export const updateSelectedEvents = (data) => ({
  type: Content.UPDATE_SELECTED_EVENTS,
  data,
});

export const changeSelectedTask = () => ({ type: Content.SELECTED_TASK });
export const changeSelectedReminders = () => ({
  type: Content.SELECTED_REMINDERS,
});
