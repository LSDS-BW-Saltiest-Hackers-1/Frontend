import {
  FETCH_COMMENT_DATA_START,
  FETCH_COMMENT_DATA_SUCCESS,
  FETCH_COMMENT_DATA_FAILURE,
  FETCH_MISC_COMMENT_DATA_START,
  FETCH_MISC_COMMENT_DATA_SUCCESS,
  FETCH_MISC_COMMENT_DATA_FAILURE,
  SAVE_COMMENT_START,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILURE,
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from '../actions/commentActions.js';

export const initState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  error: '',
  commentData: [],
  miscCommentData: [],
  userData: []
};

export const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_COMMENT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        commentData: action.payload
      };
    case FETCH_COMMENT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_MISC_COMMENT_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_MISC_COMMENT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        miscCommentData: action.payload
      };
    case FETCH_MISC_COMMENT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
