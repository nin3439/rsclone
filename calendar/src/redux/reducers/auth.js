import Cookies from 'universal-cookie';
import createHistory from '../history';
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const LOGIN = 'LOGIN';
const cookies = new Cookies();
const history = createHistory();
const initialState = {
  email: '',
  password: '',
  token: cookies.get('token'),
  user: {},
};
const autorizstionURL = `http://localhost:3020/api/v1`;
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, email: action.email };
    }

    case UPDATE_PASSWORD: {
      return { ...state, password: action.password };
    }
    case LOGIN: {
      return { ...state, token: action.token, password: '', user: action.user };
    }
    default:
      return state;
  }
};

export const updateLoginField = (email) => ({ type: UPDATE_LOGIN, email });
export const updatePasswordField = (password) => ({
  type: UPDATE_PASSWORD,
  password,
});
export const trySignIn = () => {
  return (dispatch) => {
    fetch(`${autorizstionURL}/auth`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user });
        history.push('/private');
      });
  };
};
export const tryGetUserInfo = () => {
  return (dispatch) => {
    fetch(`${autorizstionURL}/user-info`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user });
        history.push('/private');
      });
  };
};
export const signIn = () => {
  return (dispatch, getState) => {
    const { email, password } = getState().auth;
    fetch(`${autorizstionURL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user });
        history.push('/private');
      });
  };
};
