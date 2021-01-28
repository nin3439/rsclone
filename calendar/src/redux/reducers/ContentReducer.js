import { eventType } from '../../constants';
import { Content } from '../constantsActionType';

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
      const newEvents = [
        ...action.events.map((event) => {
          return {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          };
        }),
      ];
      return { ...state, events: [...newEvents] };

    case Content.ADD_EVENT:
      const newEvent = {
        ...action.event,
        start: new Date(action.event.start),
        end: new Date(action.event.end),
      };
      return { ...state, events: [...state.events, newEvent] };

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
