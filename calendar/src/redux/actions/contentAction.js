import { Content } from '../constantsActionType';

export const setHolydaysBelarus = (holidays) => ({
  type: Content.SET_HOLIDAYS_BELARUS,
  holidays,
});
export const setEvent = (event) => ({ type: Content.ADD_EVENT, event });
export const updateEvents = (events) => ({
  type: Content.UPDATE_EVENTS,
  events,
});
