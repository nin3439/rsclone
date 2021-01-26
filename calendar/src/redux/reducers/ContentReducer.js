import axios from 'axios';
import { eventType } from '../../constants';
import { Content } from './constantsActionType';

const route = 'todos';
const baseURL = `http://rs-back.herokuapp.com/${route}`;
const urlBelarus =
  'https://holidayapi.com/v1/holidays?pretty&key=79470c0f-95f1-4988-9261-54417f3e6da3&country=BY&year=2020';
const now = new Date();
const initialState = {
  events: [
    {
      id: 0,
      typeEvents: eventType.EVENTS,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2021, 0, 1),
      end: new Date(2021, 0, 2),
    },
    {
      id: 1,
      typeEvents: eventType.TASKS,
      title: 'Long Event',
      start: new Date(2021, 1, 7),
      end: new Date(2021, 1, 10),
    },
    {
      id: 2,
      typeEvents: eventType.EVENTS,
      title: 'Right now Time Event',
      start: now,
      end: now,
    },
  ],
  holidaysBelarus: [],
};

export const content = (state = initialState, action) => {
  switch (action.type) {
    case Content.UPDATE_EVENTS:
      return { ...state, events: [...action.events] };
    case Content.ADD_EVENT:
      return { ...state, events: [...state.events, action.event] };
    case Content.SET_HOLIDAYS_BELARUS:
      const newHolidays = action.holidays.map((holiday) => {
        const year = new Date().getFullYear();
        const month = new Date(holiday.date).getMonth();
        const day = new Date(holiday.date).getDate();
        return {
          title: holiday.name,
          start: new Date(year, month, day),
          end: new Date(year, month, day),
          allDay: true,
        };
      });
      return {
        ...state,
        holidaysBelarus: [...state.holidaysBelarus, ...newHolidays],
      };
    default:
      return state;
  }
};

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
const setHolydaysBelarus = (holidays) => ({
  type: Content.SET_HOLIDAYS_BELARUS,
  holidays,
});
const setEvent = (event) => ({ type: Content.ADD_EVENT, event });
const updateEvents = (events) => ({ type: Content.UPDATE_EVENTS, events });
