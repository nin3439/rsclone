import { eventType } from '../../constants/Language';
import { Content } from '../../constants/constantsActionType';
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
  holidays: [],
  dataSelectedEvents: {},
  isSelectedTask: true,
  isSelectedReminders: true,
};

export const content = (state = initialState, action) => {
  switch (action.type) {
    case Content.GET_EVENTS: {
      if (!action.events) return state;
      const newEvents = [
        ...action.events.map((event) => {
          return {
            ...event,
            title: event.title ?? '',
            start: new Date(event.start),
            end: new Date(event.end),
          };
        }),
      ];
      return { ...state, events: [...newEvents] };
    }
    case Content.CREATE_EVENT: {
      const newEvent = {
        ...action.event,
        start: new Date(action.event.start),
        end: new Date(action.event.end),
      };
      return { ...state, events: [...state.events, newEvent] };
    }
    case Content.SET_HOLIDAYS_BELARUS: {
      const newHolidays = action.holidays.map((holiday) => {
        return {
          typeEvents: eventType.HOLIDAYS_BELARUS,
          title: holiday.name,
          start: holiday.date.iso,
          end: holiday.date.iso,
          allDay: true,
        };
      });
      return {
        ...state,
        holidays: [...newHolidays],
      };
    }
    case Content.UPDATE_SELECTED_EVENTS: {
      return {
        ...state,
        dataSelectedEvents: action.data,
      };
    }
    case Content.REMOVE_EVENT: {
      debugger;
      const newEvent = state.events.filter((e) => e.id !== action.id);
      return {
        ...state,
        events: [...newEvent],
      };
    }
    case Content.UPDATE_EVENT: {
      const newEvent = state.events.map((e) =>
        e.id !== action.id
          ? e
          : {
              ...action.event,
              start: new Date(action.event.start),
              end: new Date(action.event.end),
            }
      );
      return {
        ...state,
        events: [...newEvent],
      };
    }
    case Content.SELECTED_TASK: {
      return { ...state, isSelectedTask: !state.isSelectedTask };
    }
    case Content.SELECTED_REMINDERS: {
      return { ...state, isSelectedReminders: !state.isSelectedReminders };
    }
    default:
      return state;
  }
};
