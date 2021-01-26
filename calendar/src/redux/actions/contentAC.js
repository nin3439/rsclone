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
