import { Parametr } from '../constantsActionType';

export const changeSelectedHoliday = () => ({
  type: Parametr.CHANGE_SELECTED_HOLIDAY,
});
export const changeDate = (date) => ({ type: Parametr.CHANGE_DATE, date });
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

export const updateActiveModal = () => {
  return (dispatch, getState) => {
    dispatch(changeActiveModal());
  };
};
export const updateViewFormat = (view) => {
  return (dispatch, getState) => {
    dispatch(changeViewFormat(view));
  };
};

export const updateShowBlock = () => {
  return (dispatch, getState) => {
    dispatch(changeShowBlock());
  };
};
export const updateDate = (data) => {
  return (dispatch, getState) => {
    dispatch(changeDate(data));
  };
};

export const updateSelectedHoliday = () => {
  return (dispatch, getState) => {
    dispatch(changeSelectedHoliday());
  };
};

export const updateLanguage = (lang) => {
  return (dispatch, getState) => {
    dispatch(changeLanguage(lang));
  };
};
