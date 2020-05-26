import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SAVE_COMMENT_START,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILURE,
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from '../actions/commentActions.js';

export const initState = {
  placeHolder: ''
};

export const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_START:
      return {
        ...state
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state
      };
    case SAVE_COMMENT_START:
      return {
        ...state
      };
    case SAVE_COMMENT_SUCCESS:
      return {
        ...state
      };
    case SAVE_COMMENT_FAILURE:
      return {
        ...state
      };
    case DELETE_COMMENT_START:
      return {
        ...state
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  };
};
