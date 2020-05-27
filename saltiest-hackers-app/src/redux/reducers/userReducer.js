import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions/userActions.js';

export const initState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  error: ''
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state
      };
    case FETCH_USER_FAILURE:
      return {
        ...state
      };
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        error: ''
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: ''
      };
    case REGISTER_USER_START:
      return {
        ...state
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  };
};
