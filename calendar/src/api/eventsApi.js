import axios from 'axios';
import { useSelector } from 'react-redux';
const route = 'todos';
const baseURL = `http://localhost:5000/${route}`;
const belarusHolidaysUrl = `https://calendarific.com/api/v2/holidays?api_key=49b59051224e551a4d502bb47e736b778ff4fab9&country=BY&year=`;

export const getAllEvents = (idUser) => {
  return axios.get(`${baseURL}?idUser=${idUser}`);
};
export const postEvent = (data, idUser) => {
  return axios({
    baseURL: `${baseURL}?idUser=${idUser}`,
    method: 'post',
    data,
    url: '',
  });
};

export const getHolidaysBelarus = (year) => {
  return axios.get(`${belarusHolidaysUrl}${year}`);
};
export const remove = (id, idUser) => {
  return axios.delete(`${baseURL}/${id}?idUser=${idUser}`);
};
export const putEvent = (data, id, idUser) => {
  debugger;
  return axios({
    baseURL,
    method: 'put',
    data,
    url: `/${id}?idUser=${idUser}`,
  });
};
