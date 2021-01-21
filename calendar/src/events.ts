import { eventType } from './constants';
const now = new Date();
const EVENTS = [
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
    start: new Date(2021, 0, 7),
    end: new Date(2021, 0, 10),
  },
  {
    id: 2,
    typeEvents: eventType.EVENTS,
    title: 'Right now Time Event',
    start: now,
    end: now,
  },
];

export default EVENTS;
