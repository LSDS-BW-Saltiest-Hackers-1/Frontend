import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const fetchComments = () => {
  return dispatch => {
    dispatch({ type: FETCH_COMMENTS_START });
    axiosWithAuth()
      .get('')
      .then(res => {
        console.log(res);
        // dispatch({ type: FETCH_COMMENTS_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: FETCH_COMMENTS_FAILURE });
      });
  };
};

export const SAVE_COMMENT_START = 'SAVE_COMMENT_START';
export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_FAILURE = 'SAVE_COMMENT_FAILURE';
export const saveComment = () => {
  return dispatch => {
    dispatch({ type: SAVE_COMMENT_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: SAVE_COMMENT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: SAVE_COMMENT_FAILURE });
      });
  };
};

export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const deleteComment = () => {
  return dispatch => {
    dispatch({ type: DELETE_COMMENT_START });
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res);
        // dispatch({ type: DELETE_COMMENT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: DELETE_COMMENT_FAILURE });
      });
  };
};
