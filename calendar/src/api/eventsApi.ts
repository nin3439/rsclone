import axios from 'axios';
import { dataProps } from './dataTypes';
const route = 'todos';
const baseURL = `https://rs-back-mongo.herokuapp.com/${route}`;
const belarusHolidaysUrl = `https://calendarific.com/api/v2/holidays?api_key=49b59051224e551a4d502bb47e736b778ff4fab9&country=BY&year=`;

export const getAllEvents = (idUser: string) => {
  return axios.get(`${baseURL}?idUser=${idUser}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
export const postEvent = (data: dataProps, idUser: string): Promise<any> => {
  return axios({
    baseURL: `${baseURL}?idUser=${idUser}`,
    method: 'post',
    data,
    url: '',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const getHolidaysBelarus = (year: string): Promise<any> => {
  return axios.get(`${belarusHolidaysUrl}${year}`);
};
export const remove = (id: string, idUser: string): Promise<any> => {
  return axios.delete(`${baseURL}/${id}?idUser=${idUser}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
export const putEvent = (
  data: dataProps,
  id: string,
  idUser: string
): Promise<any> => {
  debugger;
  return axios({
    baseURL,
    method: 'put',
    data,
    url: `/${id}?idUser=${idUser}`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
