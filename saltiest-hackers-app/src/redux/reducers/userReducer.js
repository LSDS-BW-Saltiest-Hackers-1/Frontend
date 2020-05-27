import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_START,
  POST_USER_SUCCESS,
  POST_USER_FAILURE
} from '../actions/userActions.js';

export const initState = {
  placeHolder: ''
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
    case POST_USER_START:
      return {
        ...state
      };
    case POST_USER_SUCCESS:
      return {
        ...state
      };
    case POST_USER_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  };
};
