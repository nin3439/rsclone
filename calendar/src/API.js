import axios from 'axios';
const route = 'todos';
const baseURL = `https://rs-back.herokuapp.com/${route}`;
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
export const getHolidaysBelarus = () => {
  return axios.get(urlBelarus);
};
const urlBelarus =
  'https://holidayapi.com/v1/holidays?pretty&key=79470c0f-95f1-4988-9261-54417f3e6da3&country=BY&year=2020';
