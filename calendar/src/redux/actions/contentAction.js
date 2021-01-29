import { getAllEvents, getHolidaysBelarus, postEvent } from '../../API';
import { Content } from '../constantsActionType';

export const setHolidaysBelarus = (holidays) => ({
  type: Content.SET_HOLIDAYS_BELARUS,
  holidays,
});
export const setEvent = (event) => ({ type: Content.ADD_EVENT, event });
export const updateEvents = (events) => ({
  type: Content.UPDATE_EVENTS,
  events,
});

export const updateAllEvents = () => {
  return (dispatch, getState) => {
    getAllEvents().then(({ data }) => {
      dispatch(updateEvents(data));
    });
  };
};

export const setEvents = (data) => {
  return (dispatch, getState) => {
    postEvent(data).then(({ data }) => {
      dispatch(setEvent(data));
    });
  };
};

export const updateHolidaysBelarus = () => {
  return (dispatch, getState) => {
    getHolidaysBelarus().then(({ data }) => {
      dispatch(setHolydaysBelarus(data.holidays));
    });
  };
};

export const updateHolidaysBelarus = () => {
  return (dispatch, getState) => {
    const state = getState();
    const isHolidaysSelected = state.stateControl.isHolidaysSelected;
    const selectedYear = state.stateControl.date.format('YYYY');
    const url = `${belarusHolidaysUrl}&year=${selectedYear}`;
    if (isHolidaysSelected) {
      axios.get(url).then(({ data }) => {
        dispatch(setHolidaysBelarus(data.response.holidays));
      });
    } else {
      dispatch(setHolidaysBelarus([]));
    }
  };
};
