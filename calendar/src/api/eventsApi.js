import axios from 'axios';
const route = 'todos';
const baseURL = `https://rs-back.herokuapp.com/${route}`;
const belarusHolidaysUrl = `https://calendarific.com/api/v2/holidays?api_key=49b59051224e551a4d502bb47e736b778ff4fab9&country=BY&year=`;

export const getAllEvents = () => {
  return axios.get(baseURL);
};
export const postEvent = (data) => {
  return axios({
    baseURL,
    method: 'post',
    data,
    url: '/',
  });
};

export const getHolidaysBelarus = (year) => {
  return axios.get(`${belarusHolidaysUrl}${year}`);
};
export const remove = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
export const putEvent = (data, id) => {
  return axios({
    baseURL,
    method: 'put',
    data,
    url: `/${id}`,
  });
};
