import axios from 'axios';
import {
  changeErrorLogin,
  changeErrorRegistration,
  setUser,
} from '../reducers/auth';

export const registration = async (dispatch, email, password) => {
  try {
    const response = await axios.post(
      `https://rs-back-mongo.herokuapp.com/api/auth/registration`,
      {
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    dispatch(changeErrorRegistration(true));
  }
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://rs-back-mongo.herokuapp.com/api/auth/auth`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://rs-back-mongo.herokuapp.com/api/auth/login`,
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      dispatch(changeErrorLogin(true));
    }
  };
};
