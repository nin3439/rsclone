import { Parametr } from '../../constants/constantsActionType';

export const changeSelectedHoliday = () => ({
  type: Parametr.CHANGE_SELECTED_HOLIDAY,
});
export const changeDateCalendar = (date) => ({
  type: Parametr.CHANGE_DATE,
  date,
});
export const changeShowBlock = () => ({ type: Parametr.CHANGE_SHOW_BLOCK });
export const changeViewFormat = (view) => ({
  type: Parametr.CHANGE_VIEW_FORMAT,
  view,
});
export const changeLanguage = (lang) => ({
  type: Parametr.CHANGE_LANGUAGE,
  lang,
});
export const changeActiveModal = () => ({ type: Parametr.CHANGE_ACTIVE_MODAL });

export const changeSettingsOpen = (boolean) => ({
  type: Parametr.CHANGE_SETTINGS_OPEN,
  boolean,
});

export const changeSound = () => ({ type: Parametr.CHANGE_SOUND });

export const changeDateOnClick = (date) => ({
  type: Parametr.CHANGE_DATE_ONCLICK,
  date,
});
export const changeActivePopup = () => ({ type: Parametr.CHANGE_ACTIVE_POPUP });
