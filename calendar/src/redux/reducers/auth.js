const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const ERROR_LOGIN = 'ERROR_LOGIN';
const ERROR_REGISTRATION = 'ERROR_REGISTRATION ';
const defaultState = {
  currentUser: {},
  isAuth: false,
  isErrorLogin: false,
  isErrorRegistration: false,
};
export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        isErrorLogin: action.boolean,
      };
    case ERROR_REGISTRATION:
      return {
        ...state,
        isErrorRegistration: action.boolean,
      };
    default:
      return state;
  }
};
export const changeErrorRegistration = (boolean) => ({
  type: ERROR_REGISTRATION,
  boolean,
});
export const changeErrorLogin = (boolean) => ({ type: ERROR_LOGIN, boolean });
export const setUser = (user) => ({ type: SET_USER, payload: user });
