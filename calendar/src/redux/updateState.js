import {
  changeActiveModal,
  changeDate,
  changeShowBlock,
  changeViewFormat,
  changeSelectedHoliday,
  changeLanguage,
} from './actions/StateContolAction';

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
