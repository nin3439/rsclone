import axios from 'axios';
import {
  setEvent,
  setHolydaysBelarus,
  updateEvents,
} from './redux/actions/contentAction';
const route = 'todos';
const baseURL = `http://rs-back.herokuapp.com/${route}`;
const urlBelarus =
  'https://holidayapi.com/v1/holidays?pretty&key=79470c0f-95f1-4988-9261-54417f3e6da3&country=BY&year=2020';
export const updateAllEvents = () => {
  return (dispatch, getState) => {
    axios.get(baseURL).then(({ data }) => {
      dispatch(updateEvents(data));
    });
  };
};

export const setEvents = (data) => {
  return (dispatch, getState) => {
    axios({
      baseURL,
      method: 'post',
      data,
      url: '/',
    }).then(({ data }) => {
      dispatch(setEvent(data));
    });
  };
};
export const updateHolidaysBelarus = () => {
  return (dispatch, getState) => {
    axios.get(urlBelarus).then(({ data }) => {
      dispatch(setHolydaysBelarus(data.holidays));
    });
  };
};
